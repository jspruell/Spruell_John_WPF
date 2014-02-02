//This calculator lets you know if your kid is available to be kicked out of the house yet


var total = calcKidDiff();//variable of total created with data that is sent from the function

function calcKidDiff (kidAge, kidMoveout){//function name, and variables involved
	var kidAge= prompt("How Old is your Kid?");//user inputs current age of the kid
	var kidMoveout = prompt("When  do you want your kid to move out?"); //age that user would like the kid to move out
	var kidDiff = kidAge - kidMoveout;  //calculates a value for value of kidDiff
	return kidDiff;//sends the information out of the function
}
console.log(total);//displays in the console the value of the var total which is derived from the calculations of the function


if(total == 0) {
	//code performed if Condition is True
	console.log ("Just Old enough to move out!")//provides info to the console if the if is followed
	alert ("Just Old enough to move out!")//notifies user of result
}else if(total > 0){
	//code performed if condition is True
	console.log ("He should have already been kicked out")//provides info to the console if the else if is followed
	alert ("He should have already been kicked out")//notifies user of result
}else{
	//code performed if Condition is False
	console.log ("Looks like you are stuck with them for a little while longer!")//provides info to the console if the else is followed
	alert ("Looks like you are stuck with them for a little while longer!")//notifies user of result
} 
