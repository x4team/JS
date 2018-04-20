var score = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 
55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var tests = score.length;
var HighestScore = 0;
var i = 0;
var output;

//Цикл выводит все значения массива score
for (var i = 0, i < score.length, i++) {
   output = "<br>Bubble solution #" + i + ": " + "score: " + score[i];
   document.write(output);
   //Выполняем условие для поиска самого большого значения в массиве
   if (score[i] >= HighestScore) { HighestScore = score[i] };
	
}
i = 0;


document.write ("<br><br>Bubbles tests: " + tests);
document.write ("<br>Highest bubble score: " + HighestScore);
document.write ("<br>Solutions with highest score: "); 
GetHighestScore();

//Создаем функцию, которая будет искать в массиве элементы равные HighestScore
function GetHighestScore() {
		while (i < score.length) {
			if (score[i]==HighestScore) { document.write("#" + i + ", ") };
            i++;
		}
     }; 