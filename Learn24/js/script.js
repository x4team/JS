function init () {     

//Программа поиска авто на стоянке
function findCarInLot(car) {
	for (var i=0; i < lot.length; i++) {  //Цикл перебирает массив с машинами
		if (car===lot[i]) {  //Если заданное авто найдено по индексу в массиве, то возвращается номер в массиве
			return i;
		}
	}
	return -1; //Т.к. массив начинается с 0, то возвращаем значение lot.length-1
}

var chevy = {
	make: "Chevy",
	model: "Bel Air"
};

var taxi = {
	make: "Webville Motors",
	model: "Taxi"
};

var fiat1 = {
	make: "Fiat",
	model: "500"
};

var fiat2 = {
	make: "Fiat",
	model: "500"
};

var lot = [chevy, taxi, fiat1, fiat2];

var loc1 = findCarInLot(fiat2); console.log (loc1);  //Локация1 вовзращает машине fiat2 - номер 3 в массиве
var loc2 = findCarInLot(taxi); console.log (loc2); //... номер 1
var loc3 = findCarInLot(chevy); console.log (loc3); //... номер 0
var loc4 = findCarInLot(fiat1); console.log (loc4); //... номер 2


}
window.onload = init; 


