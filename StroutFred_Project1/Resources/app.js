// Fred L. Strout
// VFW-1 ~ 1407
// Project 1 - Cycle through an array
// Created On: 7/8/2014

Ti.UI.setBackgroundColor("#000000");

var globalBorderRadius = 2,
	globalMargin = 25;

// Open the first window
var appWindow = Ti.UI.createWindow({
	backgroundColor: "#f0ead6",
});

// Extra background for the app
var appBackground = Ti.UI.createView({
	borderRadius: globalBorderRadius,
	borderWidth: 2,
	borderColor: "#00008b",
	height: 210,
	top: globalMargin,
	left: globalMargin,
	right: globalMargin,
	zIndex: 0
});

var appTitle = Ti.UI.createLabel({
	text: "Project 1",
	color: "#f2003c",
	shadowColor: "#a8a496",
	shadowOffset: {x:2, y:1},
	font: {fontSize: 18, fontFamily: "Arial", fontWeight: "bold"},
	top: 15,
	align: "center",
	zIndex: 1
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
	top: globalMargin + globalMargin,
	zIndex: 1
});

var infoDisplayData = Ti.UI.createLabel({
	text: "Test Data!",
	color: "#000000",
	shadowColor: "#cccccc",
	shadowOffset: {x:2, y:1},
	font: {fontSize: 22, fontFamily: "Arial", fontWeight: "bold"},
	align: "center"
});

// Clicking this button will advance through the array
var buttonNext = Ti.UI.createView({
	backgroundColor: "#00008b",
	borderColor: "#000000",
	borderRadius: globalBorderRadius,
	right: globalMargin,
	width: 100,
	height: 44,
	top: infoDisplay.top + infoDisplay.height + (globalMargin/2),
	zIndex: 1
});

var buttonNextLabel = Ti.UI.createLabel({
	text: "Next",
	color: "#ffffff",
	font: {fontSize: 16, fontFamily: "Arial", fontWeight: "bold"},
	align: "center"
});

// click this button will rescind through the array
var buttonPrevious = Ti.UI.createView({
	backgroundColor: "#00008b",
	borderRadius: globalBorderRadius,
	left: globalMargin,
	width: 100,
	height: 44,
	top: infoDisplay.top + infoDisplay.height + (globalMargin/2),
	zIndex: 1
});

var buttonPreviousLabel = Ti.UI.createLabel({
	text: "Previous",
	color: "#ffffff",
	font: {fontSize: 16, fontFamily: "Arial", fontWeight: "bold"},
	align: "center"
});

var loadEventHandlers = require("events");

appWindow.add(appBackground);

//This will not work in Android. Each item must be added using a separate line.
appBackground.add(appTitle, infoDisplay, buttonNext, buttonPrevious); 


infoDisplay.add(infoDisplayData);
buttonNext.add(buttonNextLabel);
buttonPrevious.add(buttonPreviousLabel);
appWindow.open();
