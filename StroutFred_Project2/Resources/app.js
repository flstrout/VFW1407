// Fred L. Strout
// VFW-1 ~ 1407
// Project 2 - Working with tables
// Created On: 7/14/2014

Ti.UI.setBackgroundColor('#000');

// Data
var jsonData = {
	"listA":{
		"headerText": "List A",
		"footerText": "Back Booth Responsibilities",
		"tasks": [
			{
				"task": "Brown Trays",
				"desc": "Wash and sanitize all dirty serving trays. Put new trayliners on them and place them on one of the serving tray carts located at the front counter."
			},
			{
				"task": "Nugget Sauces",
				"desc": "Refill all of the Nugget Sauce Lexans located at the Bagging Station. Replace any empty sauce cases on the Ready Rack and remove the box tops from them. Pick up any sauces that may have fallen on the floor."
			},
			{
				"task": "Break Room",
				"desc": "Make sure the Break Room is Neat, Clean and Organized (NCO). Hangup any jackets that are laying around. Throw away any old drink cups (if the drink has a big condensation puddle around the bottom, throw it away). Wipedown the tables and seats. Sweep and mop the floors."
			}
		]
	},
	"listB":{
		"headerText": "List B",
		"footerText": "Front Booth Responsibilities",
		"tasks": [
			{
				"task": "Cups & Lids",
				"desc": "Make sure that all the cups and lids are restocked and in their proper places. Don't forget to restock the overstock location."
			},
			{
				"task": "Service Trash",
				"desc": "Throw away any full trash liners in the Service Area. Wash the empty cans if necessary and replace the trash liners with new ones."
			},
		]
	}
};

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