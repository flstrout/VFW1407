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
	var itemCount = 30;
	var rowCount = 3;
	var margin = 10;
	var trueCanvasWidth = pWidth-((rowCount+1)*margin);
	var size = trueCanvasWidth/rowCount;
	var radius = 3;
	
	var galleryWindow = Ti.UI.createWindow({
		title: "Gallery",
		backgroundColor: "#000",
		backgroundImage: "diamondplate.jpg",
		backgroundRepeat: true,
		layout: "horizontal"
	});
	
	for (var i = 0; i<itemCount; i++){
		var thumbnails = Ti.UI.createView({
			title: i+1,
			backgroundColor: "#0f0",
			top: margin,
			left: margin,
			width: size,
			height: size,
			borderRadius: radius
		});
		var numbers = Ti.UI.createLabel({
			text: i+1,
			color: "#000"
		});
		thumbnails.add(numbers);
		galleryWindow.add(thumbnails);
	};
	
	galleryWindow.addEventListener("click", function(event){
		openImage(event.source);
	});
	navWindow.openWindow(galleryWindow);
};

 var openImage = function(dataSource){
 	var imageWindow = Ti.UI.createWindow({
		title: "Image",
		backgroundColor: "#000",
		backgroundImage: "diamondplate.jpg",
		backgroundRepeat: true
	});
	var image = Ti.UI.createView({
		backgroundColor: "#0f0",
		borderRadius: 7,
		borderWidth: 1,
		borderColor: "#333",
		height: 85,
		width: 250,
		align: "center"
	});
	var imageLabel = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fontSize:24, fontFamily:"Arial", fontWeight:"bold"},
		color: "#000",
		alignText: "center"
	});
	image.add(imageLabel);
	imageWindow.add(image);
	navWindow.openWindow(imageWindow);
 };
 
buttonOpenGallery.add(labelOpenGallery);
buttonOpenGallery.addEventListener("click", openGallery);
mainWindow.add(buttonOpenGallery);
navWindow.open();
