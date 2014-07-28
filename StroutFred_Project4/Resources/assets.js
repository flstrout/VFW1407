// Creates a New Window for displaying the selected Image
 var i = 0;
 var n = 0;
 var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "assets");
 var myImages = gallery.getDirectoryListing();
 var j = myImages.length;
 
 var openImage = function() {
 	var nextImage = function(){
	 	imageView.image = "assets/"+myImages[i];
	 	imageLabel.text = myImages[i];
	 	imageWindow.title = myImages[i];
		do {
			n = Math.floor((Math.random()*j));
		}while (i===n);
		//imageView.setImage(curImage);
		i = n;
	};
 	var imageWindow = Ti.UI.createWindow({
		title: myImages[i],
		backgroundColor: "#000",
		backgroundImage: "diamondplate.jpg",
		backgroundRepeat: true
	});
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
	do {
		n = Math.floor((Math.random()*j));
	}while (i===n);
	//imageView.setImage(curImage);
	i = n;
	//nextImage();
	imageWindow.add(imageView, imageLabel, newImageButton);
	newImageButton.addEventListener("click", nextImage);
	navWindow.openWindow(imageWindow);
};

assetsButton.addEventListener("click", openImage);