// Fred L. Strout
// VFW-1 ~ 1407
// Project 3 - Image Gallery
// Created On: 7/20/2014

Ti.UI.setBackgroundColor("#000");

var mainWindow = Ti.UI.createWindow({
	title: "Menu",
	backgroundColor: "#000",
	color: "#fff",
	backgroundImage: "diamondplate.jpg",
	backgroundRepeat: true
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

navWindow.open();