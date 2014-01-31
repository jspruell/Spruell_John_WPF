
//This calculator calculates how any years you have left until you can kick your kids out


var kidNumber = prompt("How Old is your Child?")
var kidMax = prompt("How Old Do You Want Them to be When They Move Out?")

function getOut(years){
	var getOut = kidMax - kidNumber; 
	console.log(getOut);
}

var years = getOut;

if(getOut = 0){
	console.log("Just Old Enough to Get Out!")
}else if(getOut > 0){
	console.log("Looks Like You can't Kick them Out Just Yet")
}else{
	console.log("You should have kicked them out years ago!")
}

//if Ceiling is less than 1 and Walls is less than 4.
//if(woodCeiling < 1) {
	//code performed if Condition is True
//	console.log ("You Do Not Have Enough for a Wood Shelter!")
//	alert ("You Do Not Have Enough for a Wood Shelter!")
//}else if(woodWalls < 4){
	//code performed if condition is True
//	console.log ("You Need More Walls")
//	alert ("You Need More Walls")
//}else{
	//code performed if Condition is False
//	console.log ("You Have Enough Walls and Ceiling to for a Wood Shelter!")
//	alert ("You Have Enough Walls and Ceiling to for a Wood Shelter!")
//} 
	









