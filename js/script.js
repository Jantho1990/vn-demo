"use strict";
// Disabled until I can get imports working.
import Intro from './chapters/Intro'
import SapphireCity1 from './chapters/SapphireCity1'


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


/**
 * END STORY SCRIPTS
 */

// Disabled until I can get imports working.

// var script = {
// 	...Intro,
// 	...SapphireCity1
// };

var script = {
	"ActI": [
		Intro,
		SapphireCity1
	]
}

global.script = script;