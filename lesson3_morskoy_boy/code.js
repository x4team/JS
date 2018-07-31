var randomLoc = Math.floor(Math.random() * 5); //Math.floor - округляет числа отбрасывая дробную часть
var location1 = randomLoc; //Координаты корабля
var location2 = location1 + 1; //
var location3 = location2 + 1; //

var guess; //догадка(получить координаты)
var hits = 0; //попадания(удары)
var guesses = 0; // догадки (количество выстрелов пользователя)

var isSunk = false; //Затонул

while(isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    	if (guess < 0 || guess > 6 || check_value() == true ) {
    		alert("Please enter a valid cell number 0-6, or must not have a subsequent repeated value.");
    	} else {
    		guesses = guesses + 1;
    		if (guess == location1 || guess == location2 || guess == location3) {
    			alert("HIT!");
    			hits = hits + 1;
       			if (hits == 3) {
    				isSunk = true;
    				alert("You sank my battleship!");
    			}
    		} else {
    				alert("MISS");
    			     }
    	}
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);