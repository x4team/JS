var clock = document.getElementById('clock'); //Получаем и изменяем элемент  clock
var color = document.getElementById('color'); //Получаем и изменяем элемент  clock

function hexoClock() {
	var time = new Date(); //Получаем дату
	var h = (time.getHours() % 12).toString(); //Получаем методом часы из даты. % 12 имеем для того чтобы использовать 12-ти часовой формат
	var m = time.getMinutes().toString(); //Получаем методом минуты из даты
	var s = time.getSeconds().toString();  //Получаем методом секунды из даты

	//Добавим проверки (т.к. часы начинаются не с нулей а с 1,2,3..., но нам нужны нули)
	if (h.length < 2) {  //Т.к. мы хотим запросить длину строки, то нам надо привести все переменные к .toString() см.выше
		h = '0' + h;
	}
	if (m.length < 2) {  //Т.к. мы хотим запросить длину строки, то нам надо привести все переменные к .toString() см.выше
		m = '0' + m;
	}	
	if (s.length < 2) {  //Т.к. мы хотим запросить длину строки, то нам надо привести все переменные к .toString() см.выше
		s = '0' + s;
	}	

	var clockString = h + ':' + m + ":" + s; //Для визуального отображения как часы
	var colorString = '#' + h + m + s; //Для цвета тоже

	clock.textContent = clockString; //Свойством textContent мы можем изменять содержимое (заменим статичные данные на те, кторые лежат в переменных clockString)
	color.textContent = colorString;

	//Далее чтобы изменить цвет фона мы обращаемся к document
	document.body.style.background = colorString;
}

//Вызываем нашу функцию
hexoClock(); //Вызываем предварительно нашу функцию, чтобы анимация пошла сразу
setInterval(hexoClock, 1000); //Чтобы страница обновлялась каждую секунду, вызываем функцию setInterval, и передаем туда аргумент нашу функцию hexoClock и 1000мс.


