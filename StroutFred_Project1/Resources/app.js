// Fred L. Strout
// VFW-1 ~ 1407
// Project 1 - Cycle through an array
// Created On: 7/8/2014

// Sets the background color to black - could have used '#000' but didn't for consistancy.
Ti.UI.setBackgroundColor("#000000");

var globalBorderRadius = 2,
	globalMargin = 25;

// Open the first window
var appWindow = Ti.UI.createWindow({
	title: "Project 1",
	backgroundColor: "#f0ead6",
});

// Border highlighting the app real estate
var appBackground = Ti.UI.createView({
	borderRadius: globalBorderRadius,
	borderWidth: 2,
	borderColor: "#00008b",
	height: 210,
	top: globalMargin,
	left: globalMargin,
	right: globalMargin
});

// Make a Title Label for the app
var appTitle = Ti.UI.createLabel({
	text: "Project 1",
	color: "#f2003c",
	shadowColor: "#a8a496",
	shadowOffset: {x:2, y:1},
	font: {fontSize: 18, fontFamily: "Arial", fontWeight: "bold"},
	top: 15,
	align: "center"
});

// Information pulled from the array will display here
var infoDisplay = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: globalBorderRadius,
	borderWidth: 1,
	borderColor: "#00008b",
	left: globalMargin,
	right: globalMargin,
	height: 85,
	top: globalMargin*2
});

// Made a label to temporarily display 'Test Data' when the app first opens
var infoDisplayData = Ti.UI.createLabel({
	text: "Test Data!",
	color: "#000000",
	shadowColor: "#cccccc",
	shadowOffset: {x:2, y:1},
	font: {fontSize: 22, fontFamily: "Arial", fontWeight: "bold"},
	alignText: "center"
});

// Clicking this button will advance through the array
var buttonNext = Ti.UI.createView({
	backgroundColor: "#00008b",
	borderColor: "#000000",
	borderRadius: globalBorderRadius,
	right: globalMargin,
	top: infoDisplay.top + infoDisplay.height + (globalMargin/2),
	width: 100,
	height: 44
});

// Label for 'buttonNext'
var buttonNextLabel = Ti.UI.createLabel({
	text: "Next",
	color: "#ffffff",
	font: {fontSize: 16, fontFamily: "Arial", fontWeight: "bold"},
	alignText: "center"
});

// click this button will rescind through the array
var buttonPrevious = Ti.UI.createView({
	backgroundColor: "#00008b",
	borderRadius: globalBorderRadius,
	left: globalMargin,
	top: infoDisplay.top + infoDisplay.height + (globalMargin/2),
	width: 100,
	height: 44
});

// Label for 'buttonPrevious'
var buttonPreviousLabel = Ti.UI.createLabel({
	text: "Previous",
	color: "#ffffff",
	font: {fontSize: 16, fontFamily: "Arial", fontWeight: "bold"},
	align: "center"
});

// Link to the events.js file - where all the action code is
var loadEventHandlers = require("events");

// This will not work in Android. Each item must be added using a separate line.
// I still was unable to get this working right for the Android emulator.
appWindow.add(appBackground);
appBackground.add(appTitle);
appBackground.add(infoDisplay);
infoDisplay.add(infoDisplayData);
appBackground.add(buttonNext);
buttonNext.add(buttonNextLabel);
appBackground.add(buttonPrevious);
buttonPrevious.add(buttonPreviousLabel);

appWindow.open();
