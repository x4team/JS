function GetSummAndLength() {
	
	//Задаем массив
	var array = [1,2,"F",4,5,6,7,8,9,10,11,12,13,14,"E",16,17,18,19,20];
	var summ = 0;
	var length;
	//Выполняем цикл и условие: Ищем не числовые значения в массиве и одновременно суммируем их в цикле.
	  	 for (var i = 0; i < array.length; i++) {
			if ((array[i]==NaN) || (array[i]==undefined) || (typeof array[i]=='string')) {
				document.write("Элемент массива под номером " + i + " не числовое значение: " + array[i] + "<br>");
			} else summ=summ + array[i];
		}

		
		//Считаем элементы в массиве
		length = array.length;

		document.write("<br>Сумма элементов в массиве равна: " + summ + "<br>" + "Кличество элементов: " + length);

}

//Вызываем функцию
GetSummAndLength();