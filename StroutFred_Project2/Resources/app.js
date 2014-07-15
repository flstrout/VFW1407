// Fred L. Strout
// VFW-1 ~ 1407
// Project 2 - Working with tables
// Created On: 7/14/2014

Ti.UI.setBackgroundColor('#000');

// Data
var listA = [
	{title: "Break Room", desc: "Clean"},
	{title: "Front Counter Cooler", desc: "Clean"},
	{title: "Brown Trays", desc: "Clean"},
	{title: "Nugget Sauces", desc: "Clean"},
	{title: "Salad Dressings", desc: "Clean"},
	{title: "Candies & Toppings", desc: "Clean"},
	{title: "++Wall Freezers", desc: "Clean"},
	{title: "++Bathrooms", desc: "Clean"}
];
var listB = [{title: "ABS Cups & Lids", desc: "Clean"},
	{title: "ABS Ice (if needed)", desc: "Clean"},
	{title: "Drive Thru Cooler", desc: "Clean"},
	{title: "Iced Teas", desc: "Clean"},
	{title: "Service Trash", desc: "Clean"},
	{title: "Service Floors", desc: "Clean"},
	{title: "++HLZ's & Bagging Station", desc: "Clean"},
	{title: "++BIM & Melitta Machines", desc: "Clean"}
];

// New Window => Navigation Window
var tableWindow = Ti.UI.createWindow({
	title: "Tasks",
	backgroundColor: "#ccc"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: tableWindow
});
 // Create the Table
var tasks = Ti.UI.createTableView({
	top: 0,
	// Conditional not needed; we're using a Navigation Window which is iOS platform specific.
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
});

// Define Headers (beginning )& Footers (end) of each section.
var aListSection = Ti.UI.createTableViewSection({
	headerTitle: "List A - Back Booth"
});

var bListSection = Ti.UI.createTableViewSection({
	headerTitle: "List B - Front Booth"
});

// Show the Task details when the Task is clicked
var showDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		title: this.title
	});
	
	var detailViewText = Ti.UI.createLabel({
		text: this.detail,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		color: "#fff",
		top: 20,
		left: 15,
		right: 15
	});
	
	detailWindow.add(detailViewText);
	
	navWindow.openWindow(detailWindow);
};

// Populate the sections with data from the json.
for(var i=0, j=listA.length; i<j; i++){
	var sectionDetail = Ti.UI.createTableViewRow({
		title: listA[i].title,
		hasChild: true,
		detail: listA[i].desc
	});
	aListSection.add(sectionDetail);
	sectionDetail.addEventListener("click", showDetail);
};

for(var i=0, j=listB.length; i<j; i++){
	var sectionDetail = Ti.UI.createTableViewRow({
		title: listB[i].title,
		hasChild: true,
		detail: listB[i].desc
	});
	bListSection.add(sectionDetail);
	sectionDetail.addEventListener("click", showDetail);
};

var lists = [aListSection, bListSection];

tasks.setData(lists);

tableWindow.add(tasks);
navWindow.open();
