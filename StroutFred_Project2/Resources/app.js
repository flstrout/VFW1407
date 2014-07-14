// Fred L. Strout
// VFW-1 ~ 1407
// Project 2 - Working with tables
// Created On: 7/14/2014

Ti.UI.setBackgroundColor('#000');

// Data
var listA = [{title: "Break Room"}, {title: "Front Counter Cooler"}, {title: "Brown Trays"}, {title: "Sauces"}, {title: "++Wall Freezers"}, {title: "++Bathrooms"}];

var tableWindow = Ti.UI.createWindow({
	backgroundColor: "#ccc"
});

var titleView = Ti.UI.createView({
	backgroundColor: "#fff",
	top: 0,
	height: 55
});

var border = Ti.UI.createView({
	backgroundColor: "#333",
	top: titleView.top + titleView.height,
	height: 1
});

var titleLabel = Ti.UI.createLabel({
	text: "Other Tasks",
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
	top: titleView.top + titleView.height - 30,
	width: "100%",
	textAlign: "center"
});

var tasks = Ti.UI.createTableView({
	top: border.top + border.height
});

if (Ti.Platform.name === "iPhone OS"){
	tasks.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

tasks.setData(listA);

titleView.add(titleLabel);
tableWindow.add(titleView, border, tasks);
tableWindow.open();
