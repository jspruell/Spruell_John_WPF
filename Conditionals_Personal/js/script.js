//John Spruell 26 January 2014 Assignment: Conditionals


//This calculator calculates if you have enough diapers and baby wipes on hand to support an baby's needs for a 24 hour period.

//User inputs ammount of clean diapers in his/her home.
var diapers = prompt("How many Diapers do you have?");
//User inputs ammount of Baby Wipes currently in his/her home.
var wipes = prompt("How many Packs of Baby Wipes do you have?");

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