// Fred L. Strout
// VFW-1 ~ 1407
// Project 2 - Working with tables
// Created On: 7/14/2014

Ti.UI.setBackgroundColor('#333');

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
// Link to the json.js file - where all the data and code to populate the table is
var loadData = require("json");
navWindow.open();