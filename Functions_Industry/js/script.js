//This calculator lets you know if you have enough space to add more files to your web server


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
	console.log ("Just enough space to install the update!")//provides info to the console if the if is followed
	alert ("Just enough space to install the update!")//notifies user of result
}else if(total > 0){
	//code performed if condition is True
	console.log ("You have plenty of space, go ahead and proceed")//provides info to the console if the else if is followed
	alert ("You have plenty of space, go ahead and proceed")//notifies user of result
}else{
	//code performed if Condition is False
	console.log ("You are going to have to clear some space")//provides info to the console if the else is followed
	alert ("You are going to have to clear some space")//notifies user of result
} 
