// A mock of what a chapter object should look like
let chapter_Intro = {
    "Chapter": {
        // The internal name of the chapter.
        // The engine uses this to distinguish
        // what chapter it is.
        "Name": "Intro",
        // You can choose to include a Title, which will get
        // splashed across the screen before delving into the content.
        "Title": "Descent Into Chaos",
        // The subtitle will be appended below the title.
        "Subtitle": "Day 13, Winderdas",
        "Choices": {
            "greetAbner": {
                "Call out": {
                    "Text": "Call out to him.",
                    "Do": "jump+ CallOut"
                },
                "Stay silent": {
                    "Text": "I'd rather no one notice my sad state...",
                    "Do": "jump+ StaySilent"
                }
            },
            scribe: {
                "Scribe Yes": {
                    "Text": "Yes, but...",
                    "Do": "jump+ ScribeYes"
                },
                "Scribe No": {
                    "Text": "I was, but not anymore...",
                    "Do": "jump+ ScribeNo"
                }
            },
            jobOffer: {
                "Accept Offer": {
                    "Text": "Alright, I'll do it.",
                    "Do": "jump+ AcceptOffer"
                },
                "Reject Offer": {
                    "Text": "It's too risky for my tastes.",
                    "Do": "jump+ RejectOffer"
                }
            }
        },
        "Flags": {
            // Anytime you want to add a flag that you'll reference in a
            // Decision later, you can add it here.
            // It will be appended to the global Flags as ChapterName.Flag,
            // which should help in making sure you know where flags
            // are being stored.

        },
        "Pages": [
            {
                "Intro_1": {
                    "Content": [
                        "It was a cold, harsh morning. I could feel the chill through my woolen coat, despite the blazing fire in the hearth of Oldmar's Tavern. I sipped at the beer in the brown pewter mug in my hand, trying to drive that damned woman out of my mind.",
                        "I'd been warned of what harlots do to a man, but I thought she'd be different. Alas, I was wrong. She took my love and my money and ran at the first sign of bigger riches, leaving me with nary a coin and a massively ruined reputation...",
                        "I guess true love doesn't conquer all.",
                        "The tavern door opened, letting in more chill and a breath of the howling wind. A man stood in the doorway, his turquoise robes and pointy hat indicating that he belonged to the Guild of Sorcerers. I examined his face, and suddenly I recognized him: it was Abner Jayworthy, a friend from times long ago.",
                    ]
                }
            },
            {
                "Intro_2": {
                    "Content": [
                        "\"Hey, close the door, you magicky buffoon,\" growled a man seated near the door.",
                        "\"My apologies, good sir!\" Abner entered and shut the door. He ambled straight over to my table and sat across from me. \"Actually, it's mighty convenient that we meet here,\" Abner remarked. \"You still doing work as a scribe?\"",
                    ]
                }
            },
            {
                "Intro_3": {
                    "Content": [
                        "My ears perked up. Any source of money would be of great benefit to me right now. \"What is it?\" I asked.",
                        "\"You see, eleven fellow sorcerers and I are soon going to make a trip to the fabled Cursed Caverns. You've heard of them, right?\"",
                        "\"Yes. Reportedly the resting place of the Eye of Xastarte. Hasn't everyone who's tried to go into that place never returned?\"",
                        "\"Well, yes, but this time it's going to be a group of twelve certified sorcerers. We're confident that we can do it. As for the job, we're going to need a scribe to record our historic journey. I'm sure I can persuade my colleagues to accept you as our official scribe.\" Abner folded his hands together and smiled. \"You up for it?\"",
                        "\"How much would I be paid?\"",
                        "\"Two thousand in gold coin.\"",
                        "I thought about the proposition. It would certainly be dangerous, and there were a great many superstitions associated with that place. But if the caverns were indeed cursed, then who better to deal with them than twelve sorcerers? Not to mention I needed the money; I was down to my last ten coins.",
                    ]
                }
            },
            {
                "CallOut": {
                    "Content": [
                        "I raised my voice and called out, \"Ho, Abner!\"",
                        "He looked at me. \"Hi, Santas!\" he greeted jovially. \"Fancy meeting you here!\"",
                    ]
                }
            },
            {
                "StaySilent": {
                    "Content": [
                        "I returned my gaze to the beer in my hand and took another sip. Abner looked around the tavern, his eyes scanning for something. His gaze fell upon me.",
                        "\"Hi, Santas!\", he greet jovially. \"Fancy meeting you here!\"",
                    ]
                }
            },
            {
                "ScribeYes": {
                    "Content": [
                        "\"Yes, but no one will employ me...\" I sighed and told him about the backstabbing whore. \"And now here I am, drinking away what's left of my money.\"",
                        "Abner nodded sympathetically. \"I am truly sorry, friend. But if you want money...I have a proposition for you.\"",
                    ]
                }
            },
            {
                "ScribeNo": {
                    "Content": [
                        "\"I was, but not anymore. Not after...\" I sighed and told him about the backstabbing whore. \"And now here I am, drinking away what's left of my money.\"",
                        "Abner nodded wistfully. \"I am truly sorry, friend. But if you want money...I have a proposition for you.\"",
                    ]
                }
            },
            {
                "AcceptOffer": {
                    "Content": [
                        "I nodded slowly. \"All right, I'll do it. When do we leave?\"",
                        "\"In a couple of weeks.\" Abner grinned at me. \"Let's have some beer and chat about old times, and then I'll take you to Sapphire City.\"",
                        "I smiled, for the first time in a long while. \"Sounds good to me.\"",
                    ]
                }
            },
            {
                "RejectOffer": {
                    "Content": [
                        "I shook my head slowly. \"It's too risky for my tastes.\"",
                        "Abner sighed. \"A pity.\" He stood, fishing around inside of his waist pouch. Picking out a handful of gold coins, he dropped them in front of me. \"Hopefully this will help you get through your difficulty. See you around!\"",
                        "Before I could say another word, he turned away and marched briskly to the door. As he pulled it open and vanished into the morning light, I couldn't help but feel as though I'd made the wrong choice...",
                    ],
                    // Calling "End" from a page will end the game after the page is loaded. Attempting to progress will trigger an End Sequence.
                    "End": true
                }
            }
        ],
        "Outline": [
            "Intro_1",
            "inlineChoice greetAbner",
            "Intro_2",
            "inlineChoice scribe",
            "Intro_3",
            "inlineChoice jobOffer",
            "nextChapter SapphireCity1"
        ]
    }
}
module.exports = chapter_Intro