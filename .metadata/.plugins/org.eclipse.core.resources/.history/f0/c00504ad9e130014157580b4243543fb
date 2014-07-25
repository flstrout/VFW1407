var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var myImages = gallery.getDirectoryListing();
var i = 0;
var j = myImages.length;

var myWindow = Ti.UI.createWindow();
var viewImage = Ti.UI.createImageView({
	image: "images/" + myImages[0]
});

myWindow.add(viewImage);
myWindow.open();

var nextData = function(){
	if(i === (j-1)){
		i = 0;
	}else{
		i++;
	};
	viewImage.image = "images/" + myImages[i];
};

var next = Ti.UI.createLabel({
	text: "Next",
	backgroundColor: "#fff",
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
	color: "#000",
	right: 10,
	width: "35%",
	height: 35,
	alignText: "center",
	top: Ti.Platform.displayCaps.platformHeight - 50
});

myWindow.add(next);

var previousData = function(){
	if(i === 0){
		i = (j-1);
	}else{
		i--;
	};
	viewImage.image = "images/" + myImages[i];
};

var previous = Ti.UI.createLabel({
	text: "Previous",
	backgroundColor: "#fff",
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
	color: "#000",
	left: 10,
	width: "35%",
	height: 35,
	alignText: "center",
	top: Ti.Platform.displayCaps.platformHeight - 50
});

myWindow.add(previous);

next.addEventListener("click", nextData);
previous.addEventListener("click", previousData);