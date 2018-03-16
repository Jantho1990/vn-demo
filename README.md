# Visual Novel Demo

This is a visual novel demo with a customized version of Monogatari. It is intended as a proof of concept of the changes I want to make for the interactive novel I want to create.

To set up and run:
- clone the repo
- open a command line in the project directory
- run `npm start` to fire up a dev server
- go to localhost:3000 in your browser

Alternatively, you can view the current state of the demo at http://vn-demo-dic.herokuapp.com/ (may take a moment to load because Heroku takes a while to load after not being visited for awhile)

> This is a work in progress. 
> Use at your own risk.

## What's so special about this demo?

Mostly, this is just a project demonstrating (to myself, at least) that the Monogatari engine can be modified to achieve the type of presentation I envision for my planned interactive novel. Any usefulness beyond that is coincidental.

## Brief Documentation

### The Story Script
The story script is comprised of multiple Chapter objects, each stored in a separate file. Chapters may then be imported into `script.js` and added to the script object. The gulp command `gulp bundle-chapters` will compile all chapters and the main script file into a single bundled file.

### Chapters
Chapters form the basis of this demo. It is simply an object which contains all the data needed to render an in-game chapter.

### Pages
Pages contain the text which will be rendered to the game screen. Each page is stored in the Pages object in a Chapter, keyed with its name. A page may consist of the following parts:
- Content: An array containing the page's text.
- Flags: When present, this will set the specified values of any Flags already loaded into the game.
- End: When this is present, the game will end immediately after progressing beyond this page.

### Flags
Flags are key-value pairs which are used by other game objects to take conditional actions based on the values of said flags. Flags are instantiated by a Chapter, and Pages can then set that Flag's value. To set the value of a Flag, use `ChapterName.FlagName = Value`.
> Once a Flag is created, any Page can change its value, even if it is in a different Chapter.

### Decisions
Decisions are objects which can be included in a Page's Content section. Depending on the value of the Decision's Flag, it will render different text.

```
{
    Decision: 'flagName',
    option1: 'This little piggy went to the market.',
    option2: 'This little piggy stayed home.'
}

// flagName is set to 'option2', so for that line the Page will render: "This little piggy stayed home."
```

### Choices
Choices allow a player to select different paths through the game. When rendered, it will appear as a set of buttons. A Choice consists of two parts:
- Text: What the button says
- Do: The action that will occur when the button is clicked.

This part of the game is similar to the way it works in Monogatari, with one caveat: you must use the `chapter+` Do in order to keep progressing through the Chapter.

```
whatShouldIEat: {
    "EatFish": {
        Text: "Eat a tasty fish",
        Do: "chapter+ AteFish"
    },
    "EatSteak": {
        Text: "Eat a tasty steak",
        Do: "chapter+ AteSteak"
    }
}
```

### Outline
This is where the page order is set. Pages and choices will be rendered into the game in the order specified by the Outline.

```
Outline: {
    "firstPage",
    "aChoiceToMake",
    // At this point, the choice is rendered, and no further pages are rendered until the choice is made by the player. At that point, the page specified by the choice's action is rendered and page rendering continues.
    "thirdPage",
    "fourthPage"
    "anotherChoice",
    "sixthPage"
    "end"
}
```

> "end" means the game will end once the chapter is finished.

