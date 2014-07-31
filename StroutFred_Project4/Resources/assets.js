// Fred L. Strout
// VFW-1 ~ 1407
// Project 4 - Random Image
// Created On: 7/28/2014

 var i = 0;
 var n = 0;
 var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "assets");
 var myImages = gallery.getDirectoryListing();
 var j = myImages.length;
 
 var openImage = function() {
 	// Forces the first image to be random
 	i = Math.floor((Math.random()*j));
 	
 	// Updates the onscreen image to the random image and runs the code to get the next random image
 	var nextImage = function(){
	 	imageView.image = "assets/"+myImages[i];
	 	imageLabel.text = myImages[i];
	 	imageWindow.title = myImages[i];
	 	
		do {
			n = Math.floor((Math.random()*j));
		}while (i===n);
		// Sets the new random image to the 'i' variable
		i = n;
	};
	
	// Creates a New Window for displaying the already determined random Image
 	var imageWindow = Ti.UI.createWindow({
		title: myImages[i],
		backgroundColor: "#000",
		statusBarStyle: 2,
		barColor: "#000",
		titleAttributes: {color: "#fff"}
	});
	
	var imageView = Ti.UI.createImageView({
		image: "assets/"+myImages[i],
		top: 100,
		left: 10,
		right: 10,
		height: 200
	});
	
	var imageLabel = Ti.UI.createLabel({
		text: myImages[i],
		top: imageView.top-30,
		font: {fontSize:22, fontFamily:"Arial", fontWeight:"bold"},
		color: "#fff",
		textAlign: "center"
	});
	
	// Creates a button to change the onscreen image to another random image
	var newImageButton = Ti.UI.createLabel({
		backgroundColor: "#ccc",
		text: "Next Image",
		font: {fontSize: 24, fontWeight: "bold"},
		height: 50,
		left: 15,
		right: 15,
		textAlign: "center",
		top: 350
	});
	
	nextImage();
	imageWindow.add(imageView, imageLabel, newImageButton);
	newImageButton.addEventListener("click", nextImage);
	navWindow.openWindow(imageWindow);
};

assetsButton.addEventListener("click", openImage);