//ПРИМЕР 1: Обычное объявление функции
function handler() { alert("Yeah, that page loaded!"); }
windows.onload = handler;

// Анонимн функция -функциональное выражение без имени, которое используется там,
// где обычно должна расоплагаться ссылка на функцию.
windows.onload = function() { alert("Yeah, that page loaded!"); }; //обработчик назначается свойству


// ПРИМЕР 2: Обычная функция
function  cookieAlarm() {
	alert("Time to take the cookies out of the oven");
};
setTimeout(cookieAlarm, 600000);

//Короче:
setTimeout(function() { alert("Time to take the cookies out of the oven"); }, 600000);
//Тоже самое но красивее оформлено:
setTimeout(function() { 
				alert("Time to take the cookies out of the oven"); 
			}, 600000);