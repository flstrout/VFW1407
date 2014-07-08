// Project 1 - Cycle through an array

Ti.UI.setBackgroundColor("White")

// Open the first window
var appWindow = Ti.UI.createWindow({
	backgroundColor: "#f0ead6",
});

// Extra background for the app
var appBackground = Ti.UI.createView({
	//backgroundColor: "00008b",
	borderRadius: 8,
	borderWidth: 2,
	borderColor: "00008b",
	height: 225,
	top: 25,
	left: 20,
	right: 20,
	zIndex: 0
});

// Information pulled from the array will display here
var infoDisplay = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: 8,
	borderWidth: 1,
	borderColor: "00008b",
	left: 40,
	right: 40,
	height: 85,
	top: appBackground.top + 40,
	zIndex: 1
});

// Clicking this button will advance through the array
var buttonForward = Ti.UI.createView({
	backgroundColor: "00008b",
	borderRadius: 8,
	right: 40,
	width: 44,
	height: 44,
	top: 170,
	zIndex: 1
});

// click this button will rescind through the array
var buttonBack = Ti.UI.createView({
	backgroundColor: "00008b",
	borderRadius: 8,
	right: buttonForward.right + buttonForward.width + 20,
	width: 44,
	height: 44,
	top: 170,
	zIndex: 1
});

appWindow.add(appBackground, infoDisplay, buttonForward, buttonBack);
appWindow.open();
