//John Spruell 26 January 2014 Assignment: Conditionals (Industry)


//This calculator tells you whether or not you need to have an admin online to provide support.

//User inputs ammount of administrators are currently online.
var administrators = prompt("How many administrators do you have online?");
//User inputs ammount of users are currently online.
var users = prompt("How many users do you have online?");

//if Administrator is less than 1 and Users is less than 50.
if(administrators < 1) {
	//code performed if Condition is True
	console.log ("You need an Administrator online!")
	alert ("You need an Administrator online!")
}else if(users < 50){
	//code performed if condition is True
	console.log ("You do not need an administrator online.")
	alert ("You do not need an administrator online.")
}else{
	//code performed if Condition is False
	console.log ("You Have enough users online to require an administrator!")
	alert ("You Have enough users online to require an administrator!")
} 
	


//if you have 4 Wood Walls and 1 Wood Ceiling you can make a Wooden Shelter//
//