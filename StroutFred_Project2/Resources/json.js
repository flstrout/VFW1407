// Fred L. Strout
// VFW-1 ~ 1407
// Project 2 - JSON Data
// Created On: 7/14/2014

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

var myTasks = jsonData[n].tasks;

for(var n in jsonData){
	console.log(jsonData[n].headerText);
	for(var i = 0; i<jsonData[n].tasks.length; i++){
		for(var x in jsonData[n].tasks[i]){
			console.log(" -" + jsonData[n].tasks[i][x]);
		};
	};
	console.log(jsonData[n].footerText);
};