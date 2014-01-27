//John Spruell 26 January 2014 Assignment: Conditionals (Industry)


//This calculator calculates if you have enough administrators online to support a number of end users.//

//User inputs ammount of administrators are currently online.
var administrators = prompt("How many administrators do you have online?");
//User inputs ammount of users are currently online.
var users = prompt("How many users do you have online?");

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