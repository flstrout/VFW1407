// Fred L. Strout
// VFW-1 ~ 1407
// Project 3 - Image Gallery
// Created On: 7/20/2014

Ti.UI.setBackgroundColor("#000");

var mainWindow = Ti.UI.createWindow({
	title: "Main",
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

var openGallery = function(){
	var pWidth = Ti.Platform.displayCaps.platformWidth;
	var pHeight = Ti.Platform.displayCaps.platformHeight;
	var itemCount = 15;
	var rowCount = 3;
	var margin = 10;
	var trueCanvasWidth = pWidth-((rowCount+1)*margin);
	var size = trueCanvasWidth/rowCount;
	
	var galleryWindow = Ti.UI.createWindow({
		title: "Gallery",
		backgroundColor: "#000",
		backgroundImage: "diamondplate.jpg",
		backgroundRepeat: true
	});
	
	var buttonOpenImage = Ti.UI.createView({
		backgroundColor: "#0f0",
		borderRadius: 7,
		borderWidth: 1,
		borderColor: "#333",
		height: 85,
		width: 250,
		align: "center"
	});
	galleryWindow.add(buttonOpenImage);
	buttonOpenImage.addEventListener("click", openImage);
	//var navWindow2 = Ti.UI.iOS.createNavigationWindow({
		//window: galleryWindow
	//});
	navWindow.openWindow(galleryWindow);
};
 var openImage = function(){
 	var imageWindow = Ti.UI.createWindow({
		title: "Image",
		backgroundColor: "#000",
		backgroundImage: "diamondplate.jpg",
		backgroundRepeat: true
	});
	navWindow.openWindow(imageWindow);
 };
 
buttonOpenGallery.add(labelOpenGallery);
buttonOpenGallery.addEventListener("click", openGallery);
mainWindow.add(buttonOpenGallery);
navWindow.open();
