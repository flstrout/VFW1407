// Fred L. Strout
// VFW-1 ~ 1407
// Project 4 - Final Comp
// Created On: 7/30/2014

var targets = ["Bourne, Jason", "Cross, Aaron", "Rath, Robert", "Hayward, Maggie", "Blank, Martin", "Connery, Sean", "Moore, Roger", "Brosnan, Pierce", "Craig, Daniel"];
var opName = ["Bourne to Kill", "Crossed Out", "Feel my Rath", "Maggie's got a Gun", "Shooting Blanks", "Sean of the Dead", "There's Moore where that came from", "Pierced through the Heart", "Craigslist Hit"];
var areaOp = ["Paris, France", "Manila, Philippines", "Portland, Oregon", "Washington D.C.", "Grosse Pointe, Michigan", "Nassau, Bahamas", "Rio de Janeiro, Brazil", "Havannah, Cuba", "Venice, Italy"];
var column1 = Ti.UI.createPickerColumn({
	backgroundColor: "#000"
});

for(var i=0, ilen=targets.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow({
  	id: targets[i],
  	op: opName[i],
  	ao: areaOp[i],
  });
    
  var label = Ti.UI.createLabel({
    color:"#333",
    font:{fontSize:16,fontWeight:'bold'},
    text: targets[i],
    textAlign:'left',
    height:'auto',
    width: 200
  });
  
  row.add(label);
  column1.addRow(row);
};
	
var openPlan = function(){
	navWindow.openWindow(planWindow);
};

var planWindow = Ti.UI.createWindow({
	title: "Mission Planning",
	backgroundColor: "#000",
	statusBarStyle: 2,
	barColor: "#000",
	titleAttributes: {color: "#fff"}
});

var codenameLabel = Ti.UI.createLabel({
	text: "What is your Codename?",
	top: 15,
	height: 25,
	left: 10,
	right: 10,
	font: {fontSize:16, fontFamily:"Arial", fontWeight:"bold"},
	color: "#fff",
	textAlign: "left"
});

var codenameInput = Ti.UI.createTextField({
	borderRadius: 3,
	backgroundColor: "#fff",
	top: codenameLabel.top + codenameLabel.height,
	paddingLeft: 5,
	height: 35,
	color: "#333",
	left: 5,
	width: 275
});

var targetLabel = Ti.UI.createLabel({
	text: "Select your target.",
	top: codenameInput.top + codenameInput.height + 10,
	height: 25,
	left: 5,
	right: 5,
	font: {fontSize:16, fontFamily:"Arial", fontWeight:"bold"},
	color: "#fff",
	textAlign: "left"
});

var targetPicker = Ti.UI.createPicker({
	columns: [column1],
	borderRadius: 3,
	backgroundColor: "#000",
	height: "auto",
	width: 250,
	top: targetLabel.top + targetLabel.height,
	left: 5
});

targetPicker.addEventListener("change", function(event){
	console.log(event.row.id + ", " + event.row.op + ", " + event.row.ao);
});

planWindow.add(codenameLabel, codenameInput, targetLabel, targetPicker);
targetPicker.setSelectedRow(0, 2, false);
operationsButton.addEventListener("click", openPlan);