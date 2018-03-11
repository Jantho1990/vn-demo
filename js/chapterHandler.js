/** 
 * We are basically using this to hijack the engine
 * and control chapter functionality entirely from
 * this handler. Because I really don't want to add
 * more bloat to the switch-case.
 */
const ChapterHandler = function () {

    /************
     * Variables
     ************/
    
    /**
     * The current chapter being handled by
     * processChapter.
     */
    let Chapter

    /**
     * We need to keep track of the Chapter's
     * progress.
     */
    let Step = 0

    /**
     * The current block of text we are preparing
     * to show.
     */
    let currentDialog = ''

    /**
     * The value for paragraph spacing.
     */
    const spacing = '<br><br>'


    /***************************************
     * These functions are used internally by the
     * handler and are not exposed to external
     * access.
     ***************************************/

    /**
     * Add an inline choice to the text box.
     */
    function addInlineChoice () {

    }

    /**
     * Clear the text box.
     */
    function clearTextBox () {
        $_("[data-ui='choices']").html("")
        $_("[data-ui='inline-choices']").remove()
    }

    /**
     * Create an inline choice button.
     */
    function createInlineChoiceButton(option) {
        return "<button data-do='" + option.Do + "'>" + option.Text + "</button>"
    }

    /**
     * Create the inline choices container.
     */
    function createInlineChoicesContainer(buttons) {
        return '<div data-ui="inline-choices" class="inline-choices-container">' + buttons + '</div>'
    }

    /**
     * Interpret an outline action and execute it.
     */
    function handleOutlineAction (action) {
        // Check to see if this is the end.
        if (action.toLowerCase() === 'end') {
            // Trigger End Sequence here
            // ...but not today.
        }

        // Check to see if this is a choice
        if (typeof Chapter.Choices[action] !== 'undefined') {
            handleOutlineChoiceAction(action)
        } else {
            // We have no idea what this is.
            // Kill it with error!
            throw new Error('Unknown outline action: ' + action)
        }
    }
    
    /**
     * Handle a Choice outline action. For now,
     * all Choices are InlineChoices.
     */
    function handleOutlineChoiceAction (action) {
        let choice = Chapter.Choices[action]
        let buttons = ''
        Object.keys(choice).forEach((option) => {
            // No frills for now, just render the choice.
            buttons += createInlineChoiceButton(choice[option])
        })
        let inlineChoices = createInlineChoicesContainer(buttons)
        currentDialog += inlineChoices
    }

    /**
     * Load content from a Page
     */
    function loadPageContent (page) {
        return page.Content.reduce((carry, paragraph, i) => {
            paragraph = prepareParagraph(paragraph)
            return i > 0 ? carry + spacing + paragraph : paragraph
        }, '')
    }

    /** 
     * Prepare the dialog to be rendered in the
     * text box.
     */
    function prepareDialog () {
        // Clear the value of the current dialog.
        currentDialog = ''

        // Starting on the current Step,
        // go through the outline and
        // append page content until arriving
        // at any non-page member of the outline.
        let {Outline} = Chapter
        let stop = false
        let slicedOutline = Outline.slice(Step)
        slicedOutline.forEach((item, i) => {
            if (stop) { return }
            if (typeof Chapter.Pages[item] !== 'undefined') {
                let page = Chapter.Pages[item]
                currentDialog = currentDialog !== ''
                    ? currentDialog + '<br><br>' + loadPageContent(page)
                    : loadPageContent(page)
                Step += 1
            } else {
                handleOutlineAction(item)
                stop = true
            }
        })
    }

    /**
     * Make sure the paragraph is ready to be
     * rendered, by processing all inline tags
     * and resolving any objects into a renderable
     * form.
     */
    function prepareParagraph (paragraph) {
        let ret
        
        // Check to see what type paragraph is
        // and handle accordingly.
        switch (typeof paragraph) {
            case 'string':
                ret = processInlineTags(paragraph)
                break
            case 'object':
                ret = processParagraphObject(paragraph)
                break
            default:
                throw new Error('Illegal paragraph: ' + paragraph)
        }

        return ret
    }

    /**
     * Process any inline tags in a paragraph.
     */
    function processInlineTags (paragraph) {
        // There will be inline tags in the future,
        // but there aren't right now, so we will
        // just return the string as is.
        return paragraph
    }

    /**
     * Process any object that was passed as a 
     * paragraph and return it in paragraph form.
     */
    function processParagraphObject (obj) {
        // Make sure this isn't an array.
        if (Array.isArray(obj)) {
            throw new Error('Paragraph object cannot be an array.')
        }

        let ret

        // Determine what kind of object this is
        // and handle accordingly.
        if (typeof obj.Decision !== 'undefined') {
            // Get the flag value.
            let flag = Flags[Chapter.Name][obj.Decision]
            ret = obj[flag]
        } else {
            // We have no idea what this object is.
            // Barf and die.
            throw new Error('Unknown paragraph object: ' + obj)
        }

        return ret
    }

    /**
     * Remove the inline choices container from
     * the text box.
     */
    function removeInlineChoicesContainer () {
        $_("[data-ui='inline-choices']").remove()
    }

    /**
     * Render the dialog.
     */
    function renderDialog () {
        let newHtml = $_("[data-ui='say']").html() != ''
            ? $_("[data-ui='say']").html() + spacing + currentDialog
            : currentDialog
        $_("[data-ui='say']").html(newHtml)
    }

    /**
     * Handle saving the current chapter
     * to the handler.
     * 
     * @param {object} chapterStatement 
     */
    function handleChapterSave (chapterStatement) {
        if (typeof Chapter === "undefined") {
            ({ Chapter } = chapterStatement)
            processChapterSave()
        } else {
            // We only want to store if this is
            // a different chapter.
            if (Chapter.Name !== chapterStatement.Chapter.Name) {
                ({ Chapter } = chapterStatement)
                processChapterSave()
            }
        }
    }

    /**
     * Other steps to perform when saving a
     * new chapter.
     */
    function processChapterSave () {
        // Save the Chapter's flags to the global
        // Flag container.
        saveChapterFlags()

        // Get rid of anything that was
        // previously on the screen.
        clearTextBox()
    }

    /**
     * Save the Chapter's flags to the global
     * Flags container.
     */
    function saveChapterFlags () {
        Object.keys(Chapter.Flags).forEach((flag) => {
            typeof Flags[Chapter.Name] !== 'undefined'
                ? typeof Flags[Chapter.Name][flag] !== 'undefined'
                    ? Flags[Chapter.Name][flag] = Chapter.Flags[flag]
                    : null
                : Flags[Chapter.Name] = { flag: Chapter.Flags[flag] }
        })
    }


    /***************************************
     * These are the functions we will expose
     * to functions outside of the handler.
     ***************************************/

    /**
     * Take the chapter statement and process it.
     * 
     * @param {*} chapter 
     */
    function processChapter (chapterStatement) {
        // If this is a new chapter, store it.
        handleChapterSave(chapterStatement)

        // Get rid of the inline choices container.
        removeInlineChoicesContainer()

        // Prepare the page dialog to be
        // displayed in the textbox.
        prepareDialog()

        // Render the dialog into the text box.
        renderDialog()

    }

    /**
     * Load all the chapters and pre-process them
     * to make it simple to handle future chapter
     * statements.
     */
    function loadChapters () {

    }
    
    return {
        processChapter,
        loadChapters
    }
}()