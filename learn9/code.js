var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 
55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var HighestScore = 0;
var output;

//Цикл выводит все значения массива score
for (var i = 0; i < scores.length; i++) {
   output = "<br>Bubble solution #" + i + " score: " + scores[i];
   document.write(output);
   //Выполняем условие для поиска самого большого значения в массиве
   if (scores[i] > HighestScore) { HighestScore = scores[i] };
	
}


document.write ("<br><br>Bubbles tests: " + scores.length);
document.write ("<br>Highest bubble score: " + HighestScore);



var HighestScoreArray = [];
//Ищем в массиве элементы равные HighestScore, и записываем значения в массив HighestScoreArray

		for (var i = 0; i < scores.length; i++) {
			if (scores[i] == HighestScore) { 
        HighestScoreArray.push(i); //Функция push работает с массивом данных, добавляет значения в конец массива
      }
        
		}
     
document.write ("<br>Solutions with highest score: " + HighestScoreArray); 