//Начнем с простого

//Структура данных, представляющая пассажиров. 
// - все пассажиры хранятся в массиве
// - каждый пассажир представляется объектом со свойствами name и paid
// - свойство name содержит имя в виде простой строки
// - а в свойстве paid хранится булевское значение, которое показывает, заплатил ли пассажир за билет.
var passengers = [  { name: "Jane Doloop", paid: true, ticket: "coach" }, //ВЫБОР НАПИТКА ЗАВИСИТ ОТ КЛАССА БИЛЕТА! (coach или firstclass)
                    { name: "Dr. Evel", paid: true, ticket: "firstclass" }, //Данные пассажирова (можете дополнить свои)
                    { name: "Sue Property", paid: false, ticket: "firstclass" },
                    { name: "John Funcall", paid: true, ticket: "coach" } 
                 ];
/*****************************************************************************************************
 * Три функции, которые перебирают массив объектов-пассажиров. И выглядят функции примерно одинаково *
 * В этих функциях много повторяющегося кода. Который можно объеденить в один.                       *
 *****************************************************************************************************
function checkPaid(passengers) {
	for(var i = 0; i < passengers.length; i++) {
		if (!passengers[i.paid]) {
			return false;
		}
	}
	return true;
}
function checkNoFly(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		if (onNoFlyList(passengers[i].name)) {
			return false;
		}
	}
	return true;
}
function printPassengers(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		console.log(passengers[i].name);
		return false;
	}
	return true;
}
*********************************************************************************************************/

/* Перебор пассажиров */
/* Функция processPassengers получает два параметра: 
	1) В первом параметре передается массив пассажиров.
	2) Второй параметр содержит функцию проверки некоторых условий для пассажира */
function processPassengers(passengers, testFunction) {
	for (var i = 0; i < passengers.length; i++) { // <- Последовательно перебираем всех пассажиров
		if (testFunction(passengers[i])) { // <- И вызываем проверочную функцию для каждого пассажира
			return false; // <- Если провер. функция возвращает true, то мы возвращаем false. Иначе говоря,
		}				  //    если пассажир не проше проверку (не заплатил за билет, входит в черный список 		
	}					  //    и т.д), вылет следует запретить!
	return true; // <- Если управление передано в эту точку, значит все 
	             //    пассажиры прошли проверку и функц. возвр true
}

// Функция проверки пассажира на "черный список". Полеты разрешены всем, кроме "доктора ЗЛО". Для всех остальных - 
// возвращается false (тоесть, пассажир не входит в "черный список")
//*** обратите внимание, функция получает один объект passenger, а не массив passengers (массив объектов)
function checkNoFlyList(passenger) {
	return (passenger.name === "Dr. Evel");
}

//Функция проверякт, заплатил ли пассажир за билет. Для этого достаточно проверить свойство paid объекта пассажира.
//Если билет не оплачен, возвращаем true!
//*** обратите внимание, функция получает один объект passenger, а не массив passengers (массив объектов)
function checkNotPaid(passenger) {
	return (!passenger.paid);
}

//Функция выводит имя пассажира и информацию об оплате вызовом console.log
function printPassenger(passenger) {
	var message = passenger.name;
	if (passenger.paid === true) {
		message = message + " has paid";
	} else {
		message = message + " has not paid";
	}
	console.log(message);
	return false; //Возвращаемое значение не так важно, потому что в данном случае мы игнорируем результат processPassenger
}

/* ОБЫЧНЫЙ СПОСОБ! Операции, выполняемые стюардессами для обслуживания
function serveCustomer(passenger) {
	//Предложить напитки
	if (passenger.ticket === "firstclass") {  //ЕСЛИ добавятся другие позиции (увеличение напитков, классов и т.д.), то функция
											  // serveCustomer разрастется, и ее основной задачей будет принятие решения по напиткам,
											  // а НЕ ОБСЛУЖИВАНИЕ КЛИЕНТОВ. Функции надо ПРОЕКТИРОВАТЬ так, чтобы они решали только
											  // одну задачу, но делали это ОЧЕНЬ хорошо.
		alert("Would you like a cocktail or wine?");
	} else {
		alert("Your choice is cola or water.");
	}
	//Предложить обед
	//Забрать мусор
} */

//ЛУЧШИЙ СПОСОБ! Операции, выполняемые стюардессами для обслуживания
function serveCustomer(passenger) {
	//Предложить напитки
	createDrinkOrder(passenger); //Вызывыется одним вызовом, вместо примера ВЫШЕ!
	//Предложить обед
	//Забрать мусор
}

//Отдельная функция заказа Напитков
function createDrinkOrder(passenger) {
	if (passenger.ticket === "firstclass") {  
		alert("Would you like a cocktail or wine?");
	} else {
		alert("Your choice is cola or water.");
	}
}

//Здесь передается функция checkNoFlyList. Это означает, что функция processPassenger будет проверять каждого
//пассажира на присутствие в "черном списке"
var allCanFly = processPassengers(passengers, checkNoFlyList);
if(!allCanFly) {
	//Если хотябы 1 пассажир присутствует в "черном списке", функция возвращает false и на консоль выводится 
    //соответствующее сообщение
	console.log("The plane can't take off; we have a passenger on the no-fly-list.");
}

//Здесь в аргументе передается функция checkNotPaid. В этом случае processPassengers проверяет, каждый ли
//пассажир заплатил за билет.
var allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid) {
	//Если хотябы 1 пассажир не заплатил за билет, функция возвращает false и на консоль выводится 
    //соответствующее сообщение
	console.log("The plane can't take off; not everyone has paid.");
}

processPassengers(passengers, printPassenger);







