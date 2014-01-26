//John Spruell 26 January 2014 Assignment: Conditionals


//This calculator calculates if you have enough Wood Walls to build a shelter in a video game.//

var inventoryWood
var woodPlanks
var woodWalls
var minWalls = 16

//uf


var wood = prompt("How much wood do you currently have in your inventory?")
var woodPlanks = prompt("How many wood planks do you cuurently have in your inventory?")
var woodWalls = (woodPlanks / 4) + (wood / 40)
alert("You can make the following ammount of Wood Walls: " + woodWalls)
console.log ("You can make the following ammount of wood walls : " + woodWalls);