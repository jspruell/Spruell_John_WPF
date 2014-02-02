//This calculator


var total = calcKidDiff();

function calcKidDiff (kidAge, kidMoveout){
	var kidAge= prompt("How Old is your Kid?");
	var kidMoveout = prompt("When  do you want your kid to move out?");
	var kidDiff = kidAge - kidMoveout;
	return kidDiff;
}
console.log(total);


if(total == 0) {
	//code performed if Condition is True
	console.log ("Just Old enough to move out!")
	alert ("Just Old enough to move out!")
}else if(total > 0){
	//code performed if condition is True
	console.log ("He should have already been kicked out")
	alert ("He should have already been kicked out")
}else{
	//code performed if Condition is False
	console.log ("Looks like you are stuck with them for a little while longer!")
	alert ("Looks like you are stuck with them for a little while longer!")
} 
