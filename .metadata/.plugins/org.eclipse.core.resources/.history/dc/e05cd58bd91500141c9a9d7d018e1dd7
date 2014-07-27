// Fred L. Strout
// VFW-1 ~ 1407
// Project 2 - JSON Data
// Created On: 7/14/2014

// Data
var jsonData = {
	"listA":{
		"headerText": "American Operators",
		"footerText": "These Operatives are American",
		"tasks": [
			{
				"task": "Bourne, Jason",
				"desc": "Treadstone Asset."
			},
			{
				"task": "Cross, Aaron",
				"desc": "Outcome Asset"
			},
			{
				"task": "Rath, Robert",
				"desc": "Contact Hitman"
			},
			{
				"task": "Hayward, Maggie",
				"desc": "Secret Agency Asset"
			},
			{
				"task": "Blank, Martin",
				"desc": "Contract Hitman"
			}
		]
	},
	"listB":{
		"headerText": "Foreign Operators",
		"footerText": "These Operatives are not American",
		"tasks": [
			{
				"task": "Connery, Sean",
				"desc": "Agent 007 (a)"
			},
			{
				"task": "Moore, Roger",
				"desc": "Agent 007 (c)"
			},
			{
				"task": "Brosnan, Pierce",
				"desc": "Agent 007 (e)"
			},
			{
				"task": "Craig, Daniel",
				"desc": "Agent 007 (f)"
			},
		]
	}
};

var openAgents = function(){
	
	// New Window => Navigation Window
	var tableWindow = Ti.UI.createWindow({
		title: "Operatives",
		backgroundColor: "#000"
	});
	
	 // Create the Table
	var tasks = Ti.UI.createTableView({
		top: 0,
		// Conditional not needed; we're using a Navigation Window which is iOS platform specific.
		style: Ti.UI.iPhone.TableViewStyle.GROUPED
	});
	
	// Show the Task details when the Task is clicked
	var showDetail = function(dataSource){
		var detailWindow = Ti.UI.createWindow({
			title: dataSource.title,
			backgroundColor: "#000"
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
	navWindow.openWindow(tableWindow);
};	
agentsButton.addEventListener("click", openAgents);