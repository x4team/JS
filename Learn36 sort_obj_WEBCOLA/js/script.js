
//Нужно отсортировать все напитки по разным критериям
var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
				 { name: "Orange", calories: 160, color: "orange", sold: 12101 },
				 { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
				 { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
				 { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
				 { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
				 { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
				 { name: "Water", calories: 0, color: "clear", sold: 62123 },
];


/*****************************************************************************************
//ПРостая сортировка данных для нашего решения задачи выше:
var numbersArray = [60,54,62,58,35,36];

//Массив состоит из чисел, поэтому функция должна сравнивать 2 числа
function compareNumbers(num1, num2) {
	if (num1 > num2) {          //сначала проверяется условие "num1 > num2" -> return 1
		return 1;
	} else if (num1 === num2) { //Если равны, то возвращаем 0
		return 0;
	} else {                    //Если num1 меньше num2, то возвращаем  -1
		return -1; 
	}
}	

//Вызываем метод sort
numbersArray.sort(compareNumbers); //И передаем методу sort нашу функцию сравнения

console.log(numbersArray);
*****************************************************************************************/

//Теперь наша функция сортировки по аналогии ВЫШЕ!
	//compareSold получает 2 объекта, представляющих виды колы, и сравнивает свойство sold
	//объекта colaA со свойством sold объекта colaB
function compareSold(colaA, colaB) {
	if (colaA.sold > colaB.sold) {
		return 1;
	} else if (colaA.sold === colaB.sold) { //с этой функцие метод sort сортирует данные
										// ПО ВОЗРАСТАНИЮ количества проданных бутылок.	
		return 0;
	} else {
		return -1;
	}
	//*481 страница учебника
}


function compareName(colaA, colaB){
		if (colaA.name[0] > colaB.name[0]) {
		return 1;
	} else if (colaA.name[0] === colaB.name[0]) { //с этой функцие метод sort сортирует данные
		//Цикл перебора последующих символов для алгоритма проверки совпадающих первых символов
				for (var i = 1; i <= colaA.name.length; i++) {  // алгоритм проверки последующих символов
					if (colaA.name[i] != colaB.name[i]) {			 // при совпадающих первых для упорядочивания по алфовиту
						if(colaA.name[i] > colaB.name[i]) {
							return 1;
						} else { return 0; }
					} 
											
				}
	} else {
		return -1;
	}
}

function compareCalories(colaA, colaB){
	if (colaA.calories > colaB.calories) {
		return 1;
	} else if (colaA.calories === colaB.calories) { //с этой функцие метод sort сортирует данные
										// ПО ВОЗРАСТАНИЮ количества КАЛОРИЙ.	
		return 0;
	} else {
		return -1;
	}
}

function compareColor(colaA, colaB){
	if (colaA.color[0] > colaB.color[0]) {
		return 1;
	} else if (colaA.color[0] === colaB.color[0]) { //с этой функцие метод sort сортирует данные ПО АЛФАВИТУ цветов.	
				//Цикл перебора последующих символов для алгоритма проверки совпадающих первых символов
				for (var i = 1; i <= colaA.color.length; i++) {  // алгоритм проверки последующих символов
					if (colaA.color[i] != colaB.color[i]) {			 // при совпадающих первых для упорядочивания по алфовиту
						if(colaA.color[i] > colaB.color[i]) {
							return 1;
						} else { return 0; }
					} 
											
				}						
		
	} else {
		return -1;
	}
}

//Функция, которая красиво выводит на экран результаты сортировки
 function printProducts(products) {
 	for (var i = 0; i < products.length; i++) {
 		console.log("Name: " + products[i].name + ", Calories: " + products[i].calories + ", Color: " + products[i].color + ", Sold: " + products[i].sold);
 	}
 }

//Метод sort массиво получает функцию, которая умеет сравнивать два значения из массива
 products.sort(compareName);
 console.log("Product sorted by name:");
 printProducts(products);

  products.sort(compareCalories);
 console.log("Product sorted by calories:");
 printProducts(products);

  products.sort(compareColor);
 console.log("Product sorted by color:");
 printProducts(products);