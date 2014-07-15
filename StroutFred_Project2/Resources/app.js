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

var tableWindow = Ti.UI.createWindow({
	title: "Other Tasks",
	backgroundColor: "#ccc"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: tableWindow
});

var border = Ti.UI.createView({
	backgroundColor: "#333",
	top: 0,
	height: 1
});

var tasks = Ti.UI.createTableView({
	top: border.top + border.height
});

if (Ti.Platform.name === "iPhone OS"){
	tasks.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

var aListSection = Ti.UI.createTableViewSection({
	headerTitle: "List A - Back Booth"
});

var bListSection = Ti.UI.createTableViewSection({
	headerTitle: "List B - Front Booth"
});

for(var i=0, j=listA.length; i<j; i++){
	var sectionDetail = Ti.UI.createTableViewRow({
		title: listA[i].title,
		detail: listA[i].desc
	});
	aListSection.add(sectionDetail);
};

for(var i=0, j=listB.length; i<j; i++){
	var sectionDetail = Ti.UI.createTableViewRow({
		title: listB[i].title,
		detail: listB[i].desc
	});
	bListSection.add(sectionDetail);
};

var lists = [aListSection, bListSection];

tasks.setData(lists);


tableWindow.add(border, tasks);
navWindow.open();
