// Fred L. Strout
// VFW-1 ~ 1407
// Project 2 - Working with tables
// Created On: 7/14/2014

Ti.UI.setBackgroundColor('#000');

// Data
var listA = [{title: "Break Room"}, {title: "Front Counter Cooler"}, {title: "Brown Trays"}, {title: "Nugget Sauces"}, {title: "Salad Dressings"}, {title: "Candies & Toppings"}, {title: "++Wall Freezers"}, {title: "++Bathrooms"}];
var listB = [{title: "ABS Cups & Lids"}, {title: "ABS Ice (if needed)"}, {title: "Drive Thru Cooler"}, {title: "Iced Teas"}, {title: "Service Trash"}, {title: "Service Floors"}, {title: "++HLZ's & Bagging Station"}, {title: "++BIM & Melitta Machines"}];

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

var aListSection = Ti.UI.createTableViewSection({
	headerTitle: "List A - Back Booth"
});

var bListSection = Ti.UI.createTableViewSection({
	headerTitle: "List B - Front Booth"
});

for(var i=0, j=listA.length; i<j; i++){
	var sectionDetail = Ti.UI.createTableViewRow({
		title: listA[i].title
	});
	aListSection.add(sectionDetail);
};

for(var i=0, j=listB.length; i<j; i++){
	var sectionDetail = Ti.UI.createTableViewRow({
		title: listB[i].title
	});
	bListSection.add(sectionDetail);
};

var lists = [aListSection, bListSection];

tasks.setData(lists);

titleView.add(titleLabel);
tableWindow.add(titleView, border, tasks);
tableWindow.open();
