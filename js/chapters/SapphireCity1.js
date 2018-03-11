// A mock of what a chapter object should look like
let chapter_SapphireCity1 = {
    "Chapter": {
        // The internal name of the chapter.
        // The engine uses this to distinguish
        // what chapter it is.
        "Name": "SapphireCity1",
        // You can choose to include a Title, which will get
        // splashed across the screen before delving into the content.
        "Title": "Sapphire City",
        // The subtitle will be appended below the title.
        "Subtitle": "Day 16, Winderdas",
        "Choices": {
            greetAlicia: {
                options: {
                    "Introduce Yourself": {
                        Text: "Introduce myself",
                        Do: "jump+ SapphireCity1_TongueTied"
                    },
                    "Proffer your hand": {
                        Text: "Proffer my hand",
                        Do: "jump+ SapphireCity1_Klutz"
                    }
                }
            },
            responseToAlicia: {
                options: {
                    "Ultimatum": {
                        Text: "This better not happen again!",
                        Do: "jump+ SapphireCity1_Ultimatum"
                    },
                    "Demand Explanation": {
                        Text: "What did you do?!",
                        Do: "jump+ SapphireCity1_DemandExplanation"
                    },
                    "Regain Composure": {
                        Text: "Compose myself",
                        Do: "jump+ SapphireCity1_RegainComposure"
                    }
                }
            }
        },
        "Flags": {
            // You can add flags here. Flags are useful for storing
            // conditional values that you want to check later to determine
            // what content to add.
            // It will be appended to the global Flags as ChapterName.Flag,
            // which should help in making sure you know where flags
            // are being stored.
            "greetedAliciaBy": ""
        },
        "Pages": [
            {
                "Sapphire_City1_1": {
                    "Content": [
                        "Sapphire City. The capital city of Undolin, and the center of the kingdom's pride. In this metropolis many marvels could be found, from the mechanical wonders produced by Undolin's talented engineers to the sumptuous beauty of the paintings, sculptures, and other items spawning from the minds within the Artisan's Guild. Its location on the Heartland River made it a vital trade port, receiving cargo and supplies from the ports on the eastern ocean and shipping them to various inland cities, as well as exporting inland goods to seaward shores.",
                        "Arguably the city's greatest accomplishment, however, lay in the Sorcerer's Tower near the town's center. Standing eight stories tall and furnished with ornate architecture and divine decorations, it was an architectural achievement on par with the Sapphire Castle itself. Here was the kingdom's most elite academy for sorcerers, the place sorcerers went after they got their basic education. The Guild of Sorcerer's was also headquartered in this building, and from here mankind's interaction with the daemonic arts was severely scrutinized and judged.",
                        "It was hard to get into this building as a sorcerer, let alone a scribe like me. And yet here I was, standing by a wall made of a translucent compound Abner called \"glass,\" gazing out at the wonderful city.",
                        "\"It's so beautiful,\" I remarked. \"You get to see this every day?\"",
                        "Abner nodded. \"You do get used to it, though. However, if you could just tear your eyes away from the panoramic view for a moment, I'd like you to meet someone.\"",
                        "I turned, and standing next to Abner was one of the most beautiful women my eyes had ever seen. Her long black hair cascaded in curls onto her shoulders and across her bosom, her smoldering green eyes gazed at me with an intensity I can't even begin to describe, and the sleeveless red garment she wore fit her ample figure snugly. I forced myself to keep looking into her eyes."
                    ]
                }
            },
            {
                "Sapphire_City1_2": {
                    "Content": [
                        "The woman giggled. \"They fall for it every time,\" she remarked to Abner.",
                        "\"Because a woman of your beauty would normally elicit such a response,\" Abner replied. \"Now, would you be so kind as to untie my friend's tongue and introduce yourself?\"",
                        "She shrugged and looked at me, waving her right hand at me nonchalantly. \"My apologies, I enjoy putting men under my thrall. I am Alicia Tabbernathy. I specialize in the mind-altering arts of magic.\""
                    ]
                }
            },
            {
                "SapphireCity1_Klutz": {
                    "Content": [
                        "I started to proffer my hand. <em>Wait, that's too forward...</em> I pulled my hand back. <em>Wait, how? It's just a common gesture!</em> I moved my hand foward again. <em>But she'll think you just want to touch her!</em>",
                        "The woman looked at me curiously. \"Well? Aren't you going to introduce yourself?\"",
                        "\"Um...\" I could feel my face turning scarlet. <em>Way to make a first impression.</em>",
                    ],
                    // Flags in a Page object will set the value of the
                    // specified flag when the page is rendered.
                    "Flags": {
                        "SapphireCity1.greetedAliciaBy": "gesture"
                    }
                }
            },
            {
                "SapphireCity1_TongueTied": {
                    "Content": [
                        "\"Um, hi, \" I said to her. \"Name's- I mean, is my nam- my name Santas-\" I stopped suddenly, seemingly unable to form any words whatsoever. <em>Way to make a first impression.</em>",
                    ],
                    "Flags": {
                        "SapphireCity1.greetedAliciaBy": "speech"
                        // We also want the ability to set flags
                        // depending on the values of other flags,
                        // but that hasn't been implemented yet.
                    }
                }
            },
            {
                "SapphireCity1_Ultimatum": {
                    "Content": [
                        "<em>Mind-altering? Did she...did she do something to me? How dare she!</em>",
                        "I shot a smoldering glare at the sorceress. \"You better not do that again, or I'll--\"",
                        "Alicia smirked and waved her hand again. \"Sorry, what?\"",
                        {
                            Decision: 'greetedAliciaBy',
                            'gesture': "\"Oh, you little--\" I took a step towards her, intending to grab her hand. Instead, my legs entangled themselves beneath me and I toppled ignomiously to the floor.",
                            'speech': "\"I'll-- I'll give you what's-- I mean, you'll be sorry--\" I stopped, again mysteriously at a loss for words."
                        },
                        "Abner chuckled. \"Might as well give it up, Santas. You can't win.\"",
                        "\"Indeed,\" Alicia added, waving her hand once more. \"Might want to think twice before you annoy a sorceress.\"",
                        "I harrumphed and turned away from Alicia. She had manipulated my mind so easily. As other sorcerers and sorceresses from the party gathered in greeting, I couldn't help but wonder in fear what would happen should any one of these powerful humans go rogue...",
                    ],
                }
            },
            {
                
                "SapphireCity1_DemandExplanation": {
                    "Content": [
                        "<em>Mind-altering? Did she...did she do something to me?</em>",
                        "\"What did you do?\" I asked.",
                        "Alicia held up her hand, giving me a good look at the ruby-encrusted ring upon her middle finger. \"An ancient item which I am an expert at wielding,\" she explained. \"It's called Erasmo's Ruby Ring, and it grants a user of sufficient ability the power to confound another's mind.\"",
                        {
                            Decision: 'greetedAliciaBy',
                            gesture: "With a devilish smile, she added, \"In this case, by making your body unsure of itself.\"",
                            speech: "With a devilish smile, she added, \"In this case, by tangling your tongue.\""
                        },
                        "\"Really? That small ring...did that to me?\"",
                        "\"Mmhmm. You still haven't told me your name, by the way.\"",
                        "\"Santas,\" I replied. \"Pleased to meet you.\"",
                        "We shook hands, but I still couldn't forget about how easily she managed to manipulate my mind. As other sorcerers and sorceresses from the party gathered in greeting, I couldn't help but wonder in fear what would happen should any one of these powerful humans go rogue...",
                    ]
                }
            },
            {
                "SapphireCity1_RegainComposure": {
                    "Content": [
                        "<em>Mind-altering? Did she...did she do something to me? Better be careful around her...</em>",
                        "\"I see,\" I replied. \"I'm Santas. Pleased to meet you.\"",
                        "We shook hands, but I still couldn't forget about how easily she managed to manipulate my mind. As other sorcerers and sorceresses from the party gathered in greeting, I couldn't help but wonder in fear what would happen should any one of these powerful humans go rogue...",
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
            }
        ],
        "Outline": [
            "SapphireCity1_1",
            "greetAlicia",
            "SapphireCity1_2",
            "responseToAlicia",
            // Calling "End" in the outline will trigger the End Sequence after the chapter is over.
            "end"
        ]
    }
}
module.exports = chapter_SapphireCity1