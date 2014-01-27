//John Spruell 26 January 2014 Assignment: Conditionals


//This calculator calculates if you have enough Wood Walls to build a shelter in a video game.//

var woodCeiling = prompt("How many Wood Ceilings do you have?");
var woodWalls = prompt("How many Wood Walls do you have?");

//if Ceiling is less than 1 and Walls is less than 4.


if(woodCeiling < 1) {
	//code performed if Condition is True
	console.log ("You Do Not Have Enough Ceiling for a Wood Shelter!")
}else if(woodWalls < 4){
	//code performed if condition is True
	console.log ("You Need More Walls")
}else{
	//code performed if Condition is False
	console.log ("You Have Enough Walls and Ceiling to for a Wood Shelter!")
} 
	


//if you have 4 Wood Walls and 1 Wood Ceiling you can make a Wooden Shelter//
//