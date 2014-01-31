
//This calculator calculates how any years you have left until you can kick your kids out


var kidNumber = prompt("How Old is your Child?")
var kidMax = prompt("How Old Do You Want Them to be When They Move Out?")

function getOut(age){
	var getOut = kidMax - kidNumber; 
	console.log(getOut);
}

var age = getOut;


getOut(age);

if(kidNumber > kidMax){
	console.log("Looks Like You can't Kick them Out Just Yet")
}else if(kidNumber < kidMax){
	console.log("You should have kicked them out years ago!")
}else{
	console.log("Just Old Enough to Get Out!")
}










