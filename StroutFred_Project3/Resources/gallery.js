// Fred L. Strout
// VFW-1 ~ 1407
// Project 3 - Image Gallery
// Created On: 7/20/2014

// Opens the Gallery - Contains the code to open the Window that contains the Image View <= Could make it a separate js file - trying to keep it K.I.S.S.
var openGallery = function(){
	// Declare Variables
	var rowCount = this.across; // Pulls the Developer Defined Property from the Parent Object
	// Creates the image array from the "image" folder
	var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
	var myImages = gallery.getDirectoryListing();
	var i = 0;
	var j = myImages.length;
	// Defines the UI elements
	var pWidth = Ti.Platform.displayCaps.platformWidth;
	var pHeight = Ti.Platform.displayCaps.platformHeight;
	var itemCount = 30;
	// var rowCount = 3; => no longer used thanks to the 'across' custom property
	var margin = 10;
	var trueCanvasWidth = pWidth-((rowCount+1)*margin);
	var size = trueCanvasWidth/rowCount;
	var radius = 3;
	
	// Create the Gallery Window
	var galleryWindow = Ti.UI.createWindow({
		title: this.across + "-Across Gallery",
		backgroundColor: "#000"
	});
	
	var galleryView = Ti.UI.createScrollView({
		top: 0,
		layout: "horizontal",
		width: pWidth,
		contentWidth: pWidth,
		showVerticalScrollIndicator: true,
		backgroundColor: "#000",
		backgroundImage: "diamondplate.jpg",
		backgroundRepeat: true
	});
	galleryWindow.add(galleryView);
	
	// Populate the Gallery with images from the images folder
	for (i = 0; i<j; i++){
		var thumbnails = Ti.UI.createView({
			title: myImages[i],
			backgroundColor: "#0f0",
			top: margin,
			left: margin,
			width: size,
			height: size,
			borderRadius: radius
		});
		var thumbnailImage = Ti.UI.createImageView({
			title: myImages[i],
			image: "images/" + myImages[i],
			top: 0,
			width: thumbnails.width*2.5
		});
		
		thumbnails.add(thumbnailImage);
		galleryView.add(thumbnails);
	};
	
	// Creates an Event Listener using event propogation
	galleryView.addEventListener("click", function(event){
		// console.log (event.source.title);
		openImage(event.source);
	});
	
	// Creates a close button for the Gallery Window
	var exitGallery = Ti.UI.createView({
		backgroundColor: "#999",
		top: pHeight-100,
		height: 40
	});
	
	var exitGalleryLabel = Ti.UI.createLabel({
		text: "Close",
		font: {fontSize: 22, fontFamily: "Arial", fontWeight: "bold"},
		textAlign: "center"
	});
	
	var closeGalleryWindow = function(){
		galleryWindow.close();
	};
	
	exitGallery.addEventListener("click", closeGalleryWindow);
	exitGallery.add(exitGalleryLabel);
	galleryWindow.add(exitGallery);
	navWindow.openWindow(galleryWindow);
};

// Creates a New Window for displaying the selected Image
 var openImage = function(dataSource){
 	var pHeight = Ti.Platform.displayCaps.platformHeight;
 	var imageWindow = Ti.UI.createWindow({
		title: dataSource.title,
		backgroundColor: "#000",
		backgroundImage: "diamondplate.jpg",
		backgroundRepeat: true
	});
	var imageView = Ti.UI.createImageView({
		image: dataSource.image,
		top: 100,
		left: 10,
		right: 10,
		borderRadius: 7,
		height: 200
	});
	var imageLabel = Ti.UI.createLabel({
		text: dataSource.title,
		top: imageView.top-30,
		font: {fontSize:22, fontFamily:"Arial", fontWeight:"bold"},
		color: "#fff",
		textAlign: "center"
	});
	
	// Creates a close button for the Image Window
	var exitImage = Ti.UI.createView({
		backgroundColor: "#999",
		top: pHeight-100,
		height: 40
	});
	
	var exitImageLabel = Ti.UI.createLabel({
		text: "Close",
		font: {fontSize: 22, fontFamily: "Arial", fontWeight: "bold"},
		textAlign: "center"
	});
	
	var closeImageWindow = function(){
		imageWindow.close();
	};
	exitImage.addEventListener("click", closeImageWindow);
	exitImage.add(exitImageLabel);
	imageWindow.add(imageView, imageLabel, exitImage);
	navWindow.openWindow(imageWindow);
 };
 
buttonOpenGallery3.add(labelOpenGallery3);
buttonOpenGallery3.addEventListener("click", openGallery);
buttonOpenGallery4.add(labelOpenGallery4);
buttonOpenGallery4.addEventListener("click", openGallery);