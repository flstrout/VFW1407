// Fred L. Strout
// VFW-1 ~ 1407
// Project 2 - JSON Data
// Created On: 7/14/2014

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

// Show the Task details when the Task is clicked
var showDetail = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		title: dataSource.title
	});
	// Uses the this keyword to pull the detail property from the for in loop
	var detailViewText = Ti.UI.createLabel({
		text: dataSource.detail,
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		color: "#fff",
		top: 20,
		left: 10,
		right: 10
	});
	detailWindow.add(detailViewText);
	navWindow.openWindow(detailWindow);
};

var lists = [];
// Populate Section Headers & Footers
for (var n in jsonData){ 
	var tableSection = Ti.UI.createTableViewSection({
		headerTitle: jsonData[n].headerText,
		footerTitle: jsonData[n].footerText
	});
	// Send Variables outside the Loop so they won't get overwritten
	lists.push(tableSection);
	// Populate the Sections with Data
	for (o in jsonData[n].tasks){ 
		var sectionDetail = Ti.UI.createTableViewRow({
			title: jsonData[n].tasks[o].task,
			detail: jsonData[n].tasks[o].desc,
			hasChild: true
		});
		tableSection.add(sectionDetail);
		//sectionDetail.addEventListener("click", showDetail);
	};
};

tasks.setData(lists);
tasks.addEventListener("click", function(event){
	showDetail(event.source);
});
tableWindow.add(tasks);