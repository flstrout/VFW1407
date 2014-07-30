// Fred L. Strout
// VFW-1 ~ 1407
// Project 4 - Final Comp
// Created On: 7/26/2014

Titanium.UI.setBackgroundColor('#000');

// Create Window => Navigation Window
var menuWindow = Ti.UI.createWindow({
	title: "Menu",
	statusBarStyle: 2,
	barColor: "#000",
	titleAttributes: {color: "#fff"}
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
	top: banner.top + banner.height + 3,
	image: "EagleLogo.bmp",
	height: 240
});

// Buttons
var agentsButton = Ti.UI.createLabel({
	backgroundColor: "#d00",
	text: "Dossiers",
	font: {fontSize: 28, fontFamily: "Arial", fontWeight: "bold"},
	color: "#000",
	textAlign: "center",
	top: logo.top + logo.height + 3,
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

var createdBy = Ti.UI.createLabel({
	text: "Created By: Fred Strout / VFW-1407",
	font: {fontSize: 8, fontFamily: "Arial"},
	color: "#666",
	top: operationsButton.top+operationsButton.height+7
});

var reqAssets = require("assets");
var reqOpData = require("opData");
var reqMission = require("mission");
menuWindow.add(banner, logo, agentsButton, assetsButton, operationsButton, createdBy);
navWindow.open();
