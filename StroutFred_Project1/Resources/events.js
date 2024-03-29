// Fred L. Strout
// VFW-1 ~ 1407
// Project 1 - Events
// Created On: 7/9/2014

// This is my array of all the different states my parents and siblings live.
var states = ["Alabama", "California", "Florida", "Louisiana", "Maine", "New Mexico", "Kansas"],
	i=0,
	j=states.length;

// This is what happens when the user clicks on the 'Next' button
// If end of array: go to beginning; else iterate up.
var nextData = function(){
	if(i === (j-1)){
		i = 0;
	}
	else{
		i++;
	};
	
	// Display the results of the function.	
	var statesLabel = Ti.UI.createLabel({
		text: states[i],
		backgroundColor: "#ffffff",
		color: "#000000",
		shadowColor: "#cccccc",
		shadowOffset: {x:2, y:1},
		width: 200,
		heigth: 28,
		font: {fontSize: 22, fontFamily: "Arial", fontWeight: "bold"},
		textAlign: "center"
	});
	
	infoDisplay.add(statesLabel);
};

// This is what happens when the user clicks on the 'Previous' button
// If beginning of array: go to end; else iterate down.
var previousData = function(){
	if(i === 0){
		i = (j-1);
	}
	else{
		i--;
	};
	
	// Display the results of the function.	
	var statesLabel = Ti.UI.createLabel({
		text: states[i],
		backgroundColor: "#ffffff",
		color: "#000000",
		shadowColor: "#cccccc",
		shadowOffset: {x:2, y:1},
		width: 200,
		heigth: 28,
		font: {fontSize: 22, fontFamily: "Arial", fontWeight: "bold"},
		textAlign: "center"
	});
	
	infoDisplay.add(statesLabel);
};

// Adds the event Listeners to the buttons (makes the button clicks work).
buttonNext.addEventListener("click", nextData);
buttonPrevious.addEventListener("click", previousData);

