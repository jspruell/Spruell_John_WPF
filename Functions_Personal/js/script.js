//This calculator


var total = calcKidDiff();

function calcKidDiff (kidAge, kidMoveout){
	var kidAge= prompt("How Old is your Kid?");
	var kidMoveout = prompt("When  do you want your kid to move out?");
	var kidDiff = kidAge - kidMoveout;
	return kidDiff;
}
console.log(total);


if( total = 0){
	console.log("Just Old Enough to Get Out!")
}
else if( total < 0){
	console.log("Looks Like You can't Kick them Out Just Yet")
}
else{
	console.log("You should have kicked them out years ago!")
}

