// Fred L. Strout
// VFW-1 ~ 1407
// Project 3 - Image Gallery
// Created On: 7/20/2014

Titanium.UI.setBackgroundColor('#000');

// Create Window => Navigation Window
var menuWindow = Ti.UI.createWindow({
	title: "Menu"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: menuWindow
});

// Visual Elements
var banner = Ti.UI.createLabel({
	text: "Top Assassin",
	font: {fontSize: 40, fontFamily: "AmericanTypewriter", fontWeight: "bold"},
	color: "#f00",
	textAlign: "center",
	top: 0,
	height: 50,
	width: "100%"
});

var logo = Ti.UI.createImageView({
	top: banner.top + banner.height + 10,
	image: "EagleLogo.bmp",
	height: 240
});

// Buttons
var agentsButton = Ti.UI.createLabel({
	backgroundColor: "#d00",
	text: "Operatives",
	font: {fontSize: 28, fontFamily: "Arial", fontWeight: "bold"},
	color: "#000",
	textAlign: "center",
	top: logo.top + logo.height + 10,
	height: 60,
	borderRadius: 5,
	left: 15,
	right: 15
});

var assetsButton = Ti.UI.createLabel({
	backgroundColor: "#fff",
	text: "Assets",
	font: {fontSize: 28, fontFamily: "Arial", fontWeight: "bold"},
	color: "#000",
	textAlign: "center",
	top: agentsButton.top + agentsButton.height + 3,
	height: 60,
	borderRadius: 5,
	left: 15,
	right: 15
});

var operationsButton = Ti.UI.createLabel({
	backgroundColor: "#039",
	text: "Mission Planning",
	font: {fontSize: 28, fontFamily: "Arial", fontWeight: "bold"},
	color: "#fff",
	textAlign: "center",
	top: assetsButton.top + assetsButton.height + 3,
	height: 60,
	borderRadius: 5,
	left: 15,
	right: 15
});

var reqOpData = require("opData");
menuWindow.add(banner, logo, agentsButton, assetsButton, operationsButton);
navWindow.open();
