// Fred L. Strout
// VFW-1 ~ 1407
// Project 3 - Image Gallery
// Created On: 7/20/2014

Ti.UI.setBackgroundColor("#000");

// Create a New Window => Navigation Window
var mainWindow = Ti.UI.createWindow({
	title: "Main",
	backgroundColor: "#000",
	backgroundImage: "diamondplate.jpg",
	backgroundRepeat: true
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

// Make the Top/Green button and put a label on it - set the custom property (across) for this button
var buttonOpenGallery3 = Ti.UI.createView({
	backgroundColor: "#0f0",
	borderRadius: 7,
	borderWidth: 1,
	borderColor: "#333",
	top: 165,
	height: 85,
	width: 250,
	align: "center",
	across: 3 // Developer Defined Property to set the rowCount variable
});

var labelOpenGallery3 = Ti.UI.createLabel({
	text: buttonOpenGallery3.across+"-Across Gallery", // Label updates automatically with the across property
	font: {fontSize:22, fontFamily:"Arial", fontWeight:"bold"},
	color: "#000",
	alignText: "center"
});

// Make the Bottom/Blue button and put a label on it - set the custom property (across) for this button
var buttonOpenGallery4 = Ti.UI.createView({
	backgroundColor: "#0cf",
	borderRadius: 7,
	borderWidth: 1,
	borderColor: "#333",
	top: buttonOpenGallery3.top + buttonOpenGallery3.height + 10,
	height: 85,
	width: 250,
	align: "center",
	across: 4 // Developer Defined Property to set the rowCount variable
});

var labelOpenGallery4 = Ti.UI.createLabel({
	text: buttonOpenGallery4.across+"-Across Gallery", // Label updates automatically with the across property
	font: {fontSize:22, fontFamily:"Arial", fontWeight:"bold"},
	color: "#000",
	alignText: "center"
});

 // Link to the gallery.js file - where all the code to populate the gallery and display the image resides
var requireGallery = require("gallery");
mainWindow.add(buttonOpenGallery3);
mainWindow.add(buttonOpenGallery4);
navWindow.open();
