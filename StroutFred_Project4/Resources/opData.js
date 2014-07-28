// Fred L. Strout
// VFW-1 ~ 1407
// Project 4 - Final Comp
// Created On: 7/27/2014

// Data
var jsonData = {
	"listA":{
		"headerText": "American Operatives",
		"footerText": "These Operatives are American",
		"tasks": [
			{
				"task": "Bourne, Jason",
				"desc": "Treadstone Asset",
				"image": "JasonBourne.jpg",
				"strength": 80,
				"agility": 80,
				"endurance": 80,
				"awareness": 80,
				"intelligence": 80,
				"tenacity": 80,
				"combat": 80,
				"surveillance": 80,
				"technology": 80
			},
			{
				"task": "Cross, Aaron",
				"desc": "Outcome Asset",
				"image": "AaronCross.jpg",
				"strength": 80,
				"agility": 80,
				"endurance": 80,
				"awareness": 80,
				"intelligence": 80,
				"tenacity": 80,
				"combat": 80,
				"surveillance": 80,
				"technology": 80
			},
			{
				"task": "Rath, Robert",
				"desc": "Contact Hitman",
				"image": "RobertRath.jpg",
				"strength": 80,
				"agility": 80,
				"endurance": 80,
				"awareness": 80,
				"intelligence": 80,
				"tenacity": 80,
				"combat": 80,
				"surveillance": 80,
				"technology": 80
			},
			{
				"task": "Hayward, Maggie",
				"desc": "Ultra Secret Kill Squad Asset",
				"image": "MaggieHayward.jpg",
				"strength": 80,
				"agility": 80,
				"endurance": 80,
				"awareness": 80,
				"intelligence": 80,
				"tenacity": 80,
				"combat": 80,
				"surveillance": 80,
				"technology": 80
			},
			{
				"task": "Blank, Martin",
				"desc": "Contract Hitman",
				"image": "MartinBlank.jpg",
				"strength": 80,
				"agility": 80,
				"endurance": 80,
				"awareness": 80,
				"intelligence": 80,
				"tenacity": 80,
				"combat": 80,
				"surveillance": 80,
				"technology": 80
			}
		]
	},
	"listB":{
		"headerText": "Foreign Operatives",
		"footerText": "These Operatives are not American",
		"tasks": [
			{
				"task": "Connery, Sean",
				"desc": "Agent 007 (a)",
				"image": "SeanConnery.jpg",
				"strength": 80,
				"agility": 80,
				"endurance": 80,
				"awareness": 80,
				"intelligence": 80,
				"tenacity": 80,
				"combat": 80,
				"surveillance": 80,
				"technology": 80
			},
			{
				"task": "Moore, Roger",
				"desc": "Agent 007 (c)",
				"image": "RogerMoore.jpg",
				"strength": 80,
				"agility": 80,
				"endurance": 80,
				"awareness": 80,
				"intelligence": 80,
				"tenacity": 80,
				"combat": 80,
				"surveillance": 80,
				"technology": 80
			},
			{
				"task": "Brosnan, Pierce",
				"desc": "Agent 007 (e)",
				"image": "PierceBrosnan.jpg",
				"strength": 80,
				"agility": 80,
				"endurance": 80,
				"awareness": 80,
				"intelligence": 80,
				"tenacity": 80,
				"combat": 80,
				"surveillance": 80,
				"technology": 80
			},
			{
				"task": "Craig, Daniel",
				"desc": "Agent 007 (f)",
				"image": "DanielCraig.jpg",
				"strength": 80,
				"agility": 80,
				"endurance": 80,
				"awareness": 80,
				"intelligence": 80,
				"tenacity": 80,
				"combat": 80,
				"surveillance": 80,
				"technology": 80
			},
		]
	}
};

var openAgents = function(){
	
	// New Window => Navigation Window
	var tableWindow = Ti.UI.createWindow({
		title: "Dossiers",
		backgroundColor: "#000",
		statusBarStyle: 2,
		barColor: "#000",
		titleAttributes: {color: "#fff"}
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
		
		// Uses the dataSource property to get data from the for in loop
		var imgContainer = Ti.UI.createView({
			backgroundColor: "#333",
			borderRadius: 4,
			top: 10,
			left: 10,
			width: 140,
			height: 210
		});
		
		var dossierImage = Ti.UI.createImageView({
			image: "operatives/" + dataSource.image,
			top: 0
		});
		
		var detailViewText = Ti.UI.createLabel({
			text: dataSource.detail,
			font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
			color: "#fff",
			top: 220,
			left: 10,
			right: 10
		});
		imgContainer.add(dossierImage);
		detailWindow.add(imgContainer, detailViewText);
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
				image: jsonData[n].tasks[o].image,
				strength: jsonData[n].tasks[o].strength,
				agility: jsonData[n].tasks[o].agility,
				endurance: jsonData[n].tasks[o].endurance,
				awareness: jsonData[n].tasks[o].awareness,
				intelligence: jsonData[n].tasks[o].intelligence,
				tenacity: jsonData[n].tasks[o].tenacity,
				combat: jsonData[n].tasks[o].combat,
				surveillance: jsonData[n].tasks[o].surveillance,
				technology: jsonData[n].tasks[o].technology,
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