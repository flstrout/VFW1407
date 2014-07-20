// Fred L. Strout
// VFW-1 ~ 1407
// Project 3 - Image Gallery
// Created On: 7/20/2014

Ti.UI.setBackgroundColor("#000");

var mainWindow = Ti.UI.createWindow({
	title: "Menu",
	backgroundColor: "#000",
	backgroundImage: "diamondplate.jpg",
	backgroundRepeat: true
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var buttonOpenGallery = Ti.UI.createView({
	backgroundColor: "#0f0",
	borderRadius: 7,
	borderWidth: 1,
	borderColor: "#333",
	height: 85,
	width: 250,
	align: "center"
});

var labelOpenGallery = Ti.UI.createLabel({
	text: "Open Gallery",
	font: {fontSize:24, fontFamily:"Arial", fontWeight:"bold"},
	color: "#000",
	alignText: "center"
});

buttonOpenGallery.add(labelOpenGallery);
mainWindow.add(buttonOpenGallery);
navWindow.open();