// Fred L. Strout
// Project 1 - Functions
// Created On: 7/9/2014

var states = ["Alabama", "California", "Florida", "Louisiana", "Maine", "New Mexico", "Kansas"],
	i=0,
	j=states.length,
	data = "Test Data";
	
var nextData = function(){
	if(i === (j-1)){
		i = 0
		data=states[i]
	}
	else{
		i++
		data=states[i]
	};
	var statesLabel = Ti.UI.createLabel({
		text: data,
		backgroundColor: "#fff",
		color: "#000",
		width: 200,
		heigth: 28,
		font: {fontSize: 22, fontFamily: "Arial", fontWeight: "bold"},
		textAlign: "center"
	});
	infoDisplay.add(statesLabel);
};


var previousData = function(){
	if(i === 0){
		i = (j-1)
		data=states[i]
	}
	else{
		i--
		data=states[i]
	};
	var statesLabel = Ti.UI.createLabel({
		text: data,
		backgroundColor: "#fff",
		color: "#000",
		width: 200,
		heigth: 28,
		font: {fontSize: 22, fontFamily: "Arial", fontWeight: "bold"},
		textAlign: "center"
	});
	infoDisplay.add(statesLabel);
};

buttonNext.addEventListener("click", nextData);
buttonPrevious.addEventListener("click", previousData);

