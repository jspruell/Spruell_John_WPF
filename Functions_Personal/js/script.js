//This calculator

function calcKidDiff (){
	var kidAge= prompt("How Old is your Kid?");
	var kidMoveout = prompt("When  do you want your kid to move out?");
	var kidDiff = kidAge - kidMoveout;
	console.log(kidDiff);
}

calcKidDiff();


if( calcKidDiff > 0){
	console.log("Just Old Enough to Get Out!")
}
else if( calcKidDiff < 0){
	console.log("Looks Like You can't Kick them Out Just Yet")
}
else{
	console.log("You should have kicked them out years ago!")
}

