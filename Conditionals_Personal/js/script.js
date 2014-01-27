//John Spruell 26 January 2014 Assignment: Conditionals (Personal)


//This calculator calculates if you have enough diapers and baby wipes on hand to support an baby's needs for a 24 hour period.

//User inputs ammount of clean diapers in his/her home.
var diapers = prompt("How many Diapers do you have?");
//User inputs ammount of Baby Wipes currently in his/her home.
var wipes = prompt("How many Packs of Baby Wipes do you have?");

//if diaper is less than 20 and wipes is less than 2
if(diapers < 20) {
	//code performed if Condition is True
	console.log ("You Do Not Have Enough Diapers!")
	alert ("You Do Not Have Enough Diapers!")
}else if(wipes < 2){
	//code performed if condition is True
	console.log ("You Need More packs of wipes")
	alert ("You Need More packs of wipes")
}else{
	//code performed if Condition is False
	console.log ("You Have Enough wipes and diapers to support a baby's needs")
	alert ("You Have Enough wipes and diapers to support a baby's needs")
} 
