//This calculator lets you know if you have enough coffee left over to keep you awake for a 12 hour shift


var total = calcCoffeeDiff();//variable of total created with data that is sent from the function

function calcCoffeeDiff (coffeeReq, coffeeMade){//function name, and variables involved
	var coffeeReq= prompt("How many cups of coffee do you need for your shift?");//user inputs how much coffee is needed for the shift
	var coffeeMade = prompt("How much coffee have you already made?"); //user inputs much coffee he/she already has
	var coffeeDiff = coffeeReq - coffeeMade;  //calculates a value for value of coffeeDiff
	return coffeeDiff;//sends the information out of the function
}
console.log(total);//displays in the console the value of the var total which is derived from the calculations of the function


if(total == 0) {
	//code performed if Condition is True
	console.log ("You have just enough coffee to keep you functioning for a shift")//provides info to the console if the if is followed
	alert ("You have just enough coffee to keep you functioning for a shift")//notifies user of result
}else if(total > 0){
	//code performed if condition is True
	console.log ("You better make some more coffee")//provides info to the console if the else if is followed
	alert ("You better make some more coffee")//notifies user of result
}else{
	//code performed if Condition is False
	console.log ("You have plenty of coffee, share some with a co-worker")//provides info to the console if the else is followed
	alert ("You have plenty of coffee, share some with a co-worker")//notifies user of result
} 
