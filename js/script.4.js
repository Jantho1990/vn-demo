"use strict";
// Disabled until I can get imports working.
// import Intro from './story/Intro'
// import SapphireCity1 from './story/SapphireCity1'


/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
var messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
var notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
var particles = {

};

// Define the music used in the game.
var music = {

};

// Define the voice files used in the game.
var voice = {

};

// Define the sounds used in the game.
var sound = {

};

// Define the videos used in the game.
var videos = {

};

// Define the images used in the game.
var images = {

};

// Define the backgrounds for each scene.
var scenes = {

};

// Define the Characters
var characters = {
	"ABNER": {
		"Name": "Abner",
		"Last": "Jayworthy",
		"Color": "#af111c"
	}
};


/**
 * BEGIN STORY SCRIPTS
 */

const decisions = {
	greetedAliciaBy: '',
	iAmCheating: null
}

let cheating = function(){
	let ret = '';
	switch(decisions.greetedAliciaBy){
		case 'gesture': 
			ret = "\"Oh, you little--\" I took a step towards her, intending to grab her hand. Instead, my legs entangled themselves beneath me and I toppled ignomiously to the floor.";
			break;
		case 'speech':
			ret = "\"I'll-- I'll give you what's-- I mean, you'll be sorry--\" I stopped, again mysteriously at a loss for words.";
			break;
	}
	return ret;
}

// Define Choices
let choices = {
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
	},
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
}

var script = {
	// The game starts here.
	"Start": [
		{
			"Page": {
				"Content": [
					"It was a cold, harsh morning. I could feel the chill through my woolen coat, despite the blazing fire in the hearth of Oldmar's Tavern. I sipped at the beer in the brown pewter mug in my hand, trying to drive that damned woman out of my mind.",
					"I'd been warned of what harlots do to a man, but I thought she'd be different. Alas, I was wrong. She took my love and my money and ran at the first sign of bigger riches, leaving me with nary a coin and a massively ruined reputation...",
					"I guess true love doesn't conquer all.",
					"The tavern door opened, letting in more chill and a breath of the howling wind. A man stood in the doorway, his turquoise robes and pointy hat indicating that he belonged to the Guild of Sorcerers. I examined his face, and suddenly I recognized him: it was Abner Jayworthy, a friend from times long ago.",
				]
			}
		},
		{ "InlineChoice": choices.greetAbner }
	],

	"Intro_2": [
		{
			"Page": {
				"Content": [
					"\"Hey, close the door, you magicky buffoon,\" growled a man seated near the door.",
					"\"My apologies, good sir!\" Abner entered and shut the door. He ambled straight over to my table and sat across from me. \"Actually, it's mighty convenient that we meet here,\" Abner remarked. \"You still doing work as a scribe?\"",
				]
			}
		},
		{ "InlineChoice": choices.scribe }
	],

	"Intro_3": [
		{
			"Page": {
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
		{ InlineChoice: choices.jobOffer }
	],

	"CallOut": [
		{
			"Page": {
				"Content": [
					"I raised my voice and called out, \"Ho, Abner!\"",
					"He looked at me. \"Hi, Santas!\" he greeted jovially. \"Fancy meeting you here!\"",
				]
			}
		},
		"jump+ Intro_2"
	],

	"StaySilent": [
		{
			"Page": {
				"Content": [
					"I returned my gaze to the beer in my hand and took another sip. Abner looked around the tavern, his eyes scanning for something. His gaze fell upon me.",
					"\"Hi, Santas!\", he greet jovially. \"Fancy meeting you here!\"",
				]
			}
		},
		"jump+ Intro_2"
	],

	"ScribeYes": [
		{
			"Page": {
				"Content": [
					"\"Yes, but no one will employ me...\" I sighed and told him about the backstabbing whore. \"And now here I am, drinking away what's left of my money.\"",
					"Abner nodded sympathetically. \"I am truly sorry, friend. But if you want money...I have a proposition for you.\"",
				]
			}
		},
		"jump+ Intro_3"
	],

	"ScribeNo": [
		{
			"Page": {
				"Content": [
					"\"I was, but not anymore. Not after...\" I sighed and told him about the backstabbing whore. \"And now here I am, drinking away what's left of my money.\"",
					"Abner nodded wistfully. \"I am truly sorry, friend. But if you want money...I have a proposition for you.\"",
				]
			}
		},
		"jump+ Intro_3"
	],

	"AcceptOffer": [
		{
			"Page": {
				"Content": [
					"I nodded slowly. \"All right, I'll do it. When do we leave?\"",
					"\"In a couple of weeks.\" Abner grinned at me. \"Let's have some beer and chat about old times, and then I'll take you to Sapphire City.\"",
					"I smiled, for the first time in a long while. \"Sounds good to me.\"",
				]
			}
		},
		"jump+ SapphireCity1_1"
	],

	"RejectOffer": [
		{
			"Page": {
				"Content": [
					"I shook my head slowly. \"It's too risky for my tastes.\"",
					"Abner sighed. \"A pity.\" He stood, fishing around inside of his waist pouch. Picking out a handful of gold coins, he dropped them in front of me. \"Hopefully this will help you get through your difficulty. See you around!\"",
					"Before I could say another word, he turned away and marched briskly to the door. As he pulled it open and vanished into the morning light, I couldn't help but feel as though I'd made the wrong choice...",
				]
			}
		},
		"end"
	],
	SapphireCity1_1: [
		{
			Page: {
				Content: [
					"<hr>", // This is hacky, it will be replaced when Chapters are introduced.		
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
			InlineChoice: choices.greetAlicia.options
		}
	],
	SapphireCity1_2: [
		{
			Page: {
				Content: [
					"The woman giggled. \"They fall for it every time,\" she remarked to Abner.",
					"\"Because a woman of your beauty would normally elicit such a response,\" Abner replied. \"Now, would you be so kind as to untie my friend's tongue and introduce yourself?\"",
					"She shrugged and looked at me, waving her right hand at me nonchalantly. \"My apologies, I enjoy putting men under my thrall. I am Alicia Tabbernathy. I specialize in the mind-altering arts of magic.\""
				]
			}
		},
		{ InlineChoice: choices.responseToAlicia.options }
	],
	SapphireCity1_Klutz: [
		{
			Page: {
				Content: [
					"I started to proffer my hand. <em>Wait, that's too forward...</em> I pulled my hand back. <em>Wait, how? It's just a common gesture!</em> I moved my hand foward again. <em>But she'll think you just want to touch her!</em>",
					"The woman looked at me curiously. \"Well? Aren't you going to introduce yourself?\"",
					"\"Um...\" I could feel my face turning scarlet. <em>Way to make a first impression.</em>",
				]
			}
		},
		function(){decisions.greetedAliciaBy = 'gesture';return true;},
		"jump+ SapphireCity1_2"
	],
	SapphireCity1_TongueTied: [
		{
			Page: {
				Content: [
					"\"Um, hi, \" I said to her. \"Name's- I mean, is my nam- my name Santas-\" I stopped suddenly, seemingly unable to form any words whatsoever. <em>Way to make a first impression.</em>",
				]
			}
		},
		function(){decisions.greetedAliciaBy = 'speech';return true;},
		"jump+ SapphireCity1_2"
	],
	SapphireCity1_Ultimatum: [
		{
			Page: {
				Content: [
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
				]
			}
		},
		"end"
	],
	SapphireCity1_DemandExplanation: [
		{
			Page: {
				Content: [
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
		"end"
	],
	SapphireCity1_RegainComposure: [
		{
			Page: {
				Content: [
					"<em>Mind-altering? Did she...did she do something to me? Better be careful around her...</em>",
					"\"I see,\" I replied. \"I'm Santas. Pleased to meet you.\"",
					"We shook hands, but I still couldn't forget about how easily she managed to manipulate my mind. As other sorcerers and sorceresses from the party gathered in greeting, I couldn't help but wonder in fear what would happen should any one of these powerful humans go rogue...",
				]
			}
		},
		"end"
	]
};
/**
 * END STORY SCRIPTS
 */

// Disabled until I can get imports working.

/*var script = {
	...Intro,
	...SapphireCity1
};*/
