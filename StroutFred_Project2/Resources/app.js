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
				"desc": "Make sure the Break Room is Neat, Clean and Organized (NCO). Hangup any jackets that are laying around. Throw away any used cups that are no longer being used - if it has a big sweat puddle, throw it away. Wipedown the tables and seating. Sweep and mop the floors."
			}
		]
	},
	"listB":{
		"headerText": "List B",
		"footerText": "Front Booth Responsibilities",
		"tasks": [
			{
				"task": "Cups & Lids",
				"desc": "Make sure that all the cups and lids are restocked and in their proper places. Don't forget about the overstock location."
			},
			{
				"task": "Service Trash",
				"desc": "Throw away any full trash liners in the Service Area. Wash the empty cans if necessary and replace with new liners"
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

for (var n in jsonData){ // Populate Section Headers & Footers
		var tableSection = Ti.UI.createTableViewSection({
			headerTitle: jsonData[n].headerText,
			footerTitle: jsonData[n].footerText
		});
		for (o in jsonData[n].tasks){ // Populate the Sections with Data
			var sectionDetail = Ti.UI.createTableViewRow({
				title: jsonData[n].tasks[o].task,
				detail: jsonData[n].tasks[o].desc,
				hasChild: true
			});
			tableSection.add(sectionDetail);
			sectionDetail.addEventListener("click", showDetail);
		};
	};
	
/*
 * Your loop above is only show the last section because that's what this loop is instructed to do according to your code. 
 * Remember, variables declared within a loop will be erased/overwriten with new data the next time the loop runs. This means
 * the first section you create is lost as soon as the loop runs a second time. 
 * 
 * You must capute the data and store it in a safe place (like an array) outside the loop.
 * The process is like this:
 * Loop -> Create Objects -> Grab and store the objects someplace outside the loop -> continue loop.
 * The object that contains the saved objects outside your loop is the object (or array) that you'd use to set your table data.
 */

var lists = [tableSection];

tasks.setData(lists);

tableWindow.add(tasks);
navWindow.open();
