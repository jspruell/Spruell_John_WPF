//John Spruell 26 January 2014 Assignment: Conditionals (Wacky)


//This calculator calculates if you have enough Wood Walls to build a shelter in a video game.//

//User inputs ammount of Wood ceilings currently in his/her inventory
var woodCeiling = prompt("How many Wood Ceilings do you have?");
//User inputs ammount of Wood Walls currently in his/her inventory
var woodWalls = prompt("How many Wood Walls do you have?");

//if Ceiling is less than 1 and Walls is less than 4.


if(woodCeiling < 1) {
	//code performed if Condition is True
	console.log ("You Do Not Have Enough for a Wood Shelter!")
	alert ("You Do Not Have Enough for a Wood Shelter!")
}else if(woodWalls < 4){
	//code performed if condition is True
	console.log ("You Need More Walls")
	alert ("You Need More Walls")
}else{
	//code performed if Condition is False
	console.log ("You Have Enough Walls and Ceiling to for a Wood Shelter!")
	alert ("You Have Enough Walls and Ceiling to for a Wood Shelter!")
} 
	


//if you have 4 Wood Walls and 1 Wood Ceiling you can make a Wooden Shelter//
//