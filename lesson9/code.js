var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 
55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, 
.25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

function printAndGetHighScore (scores) {
var highScore = 0;
var output;
//Цикл выводит все значения массива score
for (var i = 0; i < scores.length; i++) {
   output = "<br>Bubble solution #" + i + " score: " + scores[i];
   document.write(output);
   //Выполняем условие для поиска самого большого значения в массиве
   if (scores[i] > highScore) highScore = scores[i];	
   }
return highScore;
}

function getBestResults (scores, highScore) {
//Ищем в массиве элементы равные highScore, и записываем значения в массив bestSolutions
  var bestSolutions = [];
		for (var i = 0; i < scores.length; i++) {
			if (scores[i] == highScore) { 
        bestSolutions.push(i); //Функция push работает с массивом данных, добавляет значения в конец массива
      }
        
		}
    return bestSolutions;
  }

function getMostCostEffectiveSolution (scores, costs, highScore) { //Функия getMostCostEffectiveSolution получает массив результатов, массив затрат и максимальный результат.
  //Сначала cost присваивается большое число, которое уменьшается при нахождении образца с меньшими затратами (и максимальным результатом)
  var cost = 100; //Решение с минимальными затратами отслеживается в переменной cost...
  var index; //... а индекс образца с минимальными затратами - в переменной index.

  for (var i = 0; i < scores.length; i++) { //Перебираем массив scores так же? как прежде..
      if (scores[i] == highScore) { //... и проверяем? является ли результат максимальным
        if (cost > costs[i]) {      //Если результат максимален? мы проверяем затраты. Если текущие затраты
          index = i;                //больше сохраненных, значит, мы нашли образец с меньшими затратами;
          cost = costs[i];          // его позиция (индекс в массиве) сохраняется в переменной index, 
        }                           // а затраты - в cost (хранящей минимальные затраты по всем просмотренным элементам)
      }
     }
     return index; //После зацершения цикла в переменной index хранится индекс образца с минимальными затратами. Он возвращается коду, вызвавшему функцию (см 55 строчку).
}

var highScore = printAndGetHighScore(scores); //Вызываем функцию и передаем массив scores и присваиваем возвращенное значение переменной highScore
document.write ("<br><br>Bubbles tests: " + scores.length);
document.write ("<br>Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
document.write ("<br>Solutions with highest score: " + bestSolutions); 

var mostCostEffective = getMostCostEffectiveSolution (scores, costs, highScore);
document.write ("<br>Bubble Solution #" + mostCostEffective + " is the most cost effective");

