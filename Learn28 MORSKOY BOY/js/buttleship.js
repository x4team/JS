function init () {

//Наш объект ПРЕДСТАВЛЕНИЯ
var view = {
	//метод получает строковое сообщение и выводит его
	//в области сообщений
	displayMessage: function(msg) { //Метод displayMessage получает один аргумент - текст сообщения
		var messageArea = document.getElementById("messageArea"); //Мы получаем элемент messageArea из страницы
		messageArea.innerHTML = msg; //..и обновляем текст элемента messageArea, задавая его свйству innerHTML содержимое msg
	},

	displayHit: function(location) {
		var cell = document.getElementById(location); //Получаем идентификатор, созданный по введенным пользователям координатам
		cell.setAttribute("class", "hit"); //Добавляем класс hit к элементу ячейки
	},

	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};

//Объект модели
var model = {
	boardSize: 7, //Эти 3 свойства помогают обойтись без жесткого фиксированных значений:
	numShips: 3,  // boardSize (размер игрового поля), numSships (количество кораблей в игре),
	shipLength: 3,// и shipLength (длина корабля в клетках, 3)
	shipsSunk: 0, // <- Свойство инициализируется значением 0 в начале игры, содержит текущее кол-во потопленных кораблей
	/* Свойство ships содержит массив объектов ship, содержащих массивы locations и hits для одного из трех
	   кораблей. (Обратите внимание, что использовавшаяся ранее переменная ships заменена свойством объекта модели) */	
	

    //ships: [ { locations: ["06", "16", "26"], hits: ["", "", ""] }, // Позднее позиции кораблей будут генерироваться 
	//		   { locations: ["24", "34", "44"], hits: ["", "", ""] }, // случайным образом
	//		   { locations: ["10", "11", "12"], hits: ["", "", ""] }], //
	
    ships: [ { locations: [0, 0, 0], hits: ["", "", ""] }, // 
             { locations: [0, 0, 0], hits: ["", "", ""] }, // 
             { locations: [0, 0, 0], hits: ["", "", ""] }], //

    //Метод для выполнения выстрела и проверки результата (промах или попадание).		 
    fire: function(guess) { //метод получает координаты выстрела
    	for (var i = 0; i < this.numShips; i++){ //Затем перебираем массив ships, последовательно проверяя каждый корабль.
    		var ship = this.ships[i]; // Здесь мы получаем объект корабля. Необходимо проверить, совпадают ли
    		                        	// координаты выстрела с координатами одной из занимаемых им клеток.
    		//!!!var locations = ship.locations; // Получаем массив клеток, занимаемых кораблем. (это свойство, в котором массив)
    		
    		//ЗДЕСЬ мы могли просто создать еще один цикл, который перебирает массив locations и сравнивает каждый эдемент с 
            //guess, и если значения совпадают, то выстрел попал в цель
    		//НО СДЕЛАЕМ ИНАЧЕ:
    		//!!!var index = locations.indexOf(guess); //Метод indexOf ищет в массиве указанное значение и возвращает 
            //его индекс (или -1, если значение отсутствует в массиве). Обратите внимание на сходство метода indeOf массива 
            //с методом IndexOf строки.Оба метода получают значение и возвращают индекс (или -1, если значение не найден0)
 			//СОКРАЩАЕМ 2 СТРОКИ ВЫШЕ:
 			var index = ship.locations.indexOf(guess); //Две выделенные строки выше объдинены в одну строку.

 			if (index >= 0) {
 				//Есть попадание! ***Если полученный индекс больше либо равен нулю, значит указанная клетка присутствует в 
                //массиве location и выстрел попал в цель.
 				ship.hits[index] = "hit"; //Ставим отметку в массиве hits по томуже ВЫЧИСЛЕННОМУ индексу через indexOf выше.
 				
 				//Оповещаем представление о том, что в клетке guess следует вывести маркер попадания.
 				view.displayHit(guess);
 				//И приказываем представлению вывести сообщение "HIT!"
 				view.displayMessage("HIT!");
 				
 				//Здесь добавили проверку, после того как будем точно знать, что выстрел попал в корабль. Если корабль
 				//потоплен, то мы увеличиваем счетчик потопленных кораблей в свойстве shipsSunk модели.
 				if (this.isSunk(ship)) {
 					//Сообщаем игроку, что он потопил корабль!
 					view.displayMessage("You sank my battleship!");
 					this.shipsSunk++;
 				}
 				
 				return true; //А еще нужно вернуть true, потому что выстрел оказался удачным.
 			}	
    	}
    	//Сообщаем представлению, что в клетке guess следует вывести маркер промаха!
    	view.displayMiss(guess);
    	//И приказываем представлению вывести сообщение о промахе
    	view.displayMessage("You missed.");
    	//***??? - Методы объекта представления добавляют класс "hit" или "miss" к элементу с идентификатором, 
    	//содержащимся в guess. Таким образом, представление преобразует "попадания" из массива hits в разметку HTML. 
    	//Не забывайте, что HTML - "попадания" нужны для отображения информации, а "попадания" в модели представляют
    	//фактическое состояние.

    	return false; //Если же после перебора всех кораблей попадание так и не обнаружено, 
                    //игрок промахнулся, а метод возвращает false.
    },

   //Метод получает объект корабля и возвращает true, если корабль потоплен, или false, если он еще держится на плаву.
    isSunk: function(ship) { //Проверяем объект-корабль, помечены ли все его клетки маркером попадания hit.
    	for (var i = 0; i < this.shipLength; i++) {
    		if (ship.hits[i] !== "hit") {
    			return false; //Если есть хотя бы одна клетка, в которую не попали, то корабль жив, и метод возвращает false
    		}
    	}
    	return true; //А если нет - корабль потоплен! Метод возвращает true.
    	//ДОБАВИМ ЭТОТ МЕТОД В ОБЪЕКТ МОДЕЛИ, сразу же за методом fire!
    },

    //Метод в цикле создает корабли, пока массив ships модели не будет заполнен достаточным кол-ом
    //кораблей. Каждый раз, когда метод генерирует новый корабль (generateShip()), он использует
    //метод collision для проверки возможных перекрытий. Если корабль перекрывается с другими кораблями,
    //метод отказывается от него и делает следующую попытку.
    generateShipLocations: function() {
        var locations;
        //Для каждого корабля генерируется набор позиций, то есть занимаемыш клеток.
        for (var i = 0; i < this.numShips; i++) {
            do {
                //Генерируется новый набор позиций..
                locations = this.generateShip();
            //..и проверяем, перекрываются ли эти позиции с существующими кораблями на доске. Если есть
            //перекрытия, нужна еще одна попытка. Новые позиции генерируются, пока не будут найдены
            //варианты без перекрытий.   
            } while (this.collision (locations));
            //Полученные позиции без перекрытий сохраняются в свойстве locations объекта корабля в массиве
            //model.ships
            this.ships[i].locations = locations;
        }
    },

    //Метод generateShip создает массив со случайными позициями корабля, не беспокоясь о возможных перекрытиях.
    //Выполнение метода состоит из двух шагов. На первом шаге случайным образом выбирается направление:
    //будет корабль располагаться горизонтально или вертикально (1 или 0). 
    generateShip: function () {
        //При помощи Math.random мы генерируем число от 0 до 1 и умножаем результат на 2, чтобы получить
        //число в диапазоне от 0 до 2(не включая 2). Затем Math.floor преобразует в 0 или 1
        var direction = Math.floor(Math.random() * 2);
        var row, col;

        if(direction === 1) {
            //Генерируем начальную позицию корабля на игровом поле. 
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength ));
        } else { 
           //...для вертик корабля 
           row = Math.floor(Math.random() * (this.boardSize - this.shipLength ));
           col = Math.floor(Math.random() * this.boardSize);
        }

        //Набор позиций нового корабля начинается с пустого массива, в который последовательно 
        //добавляются элементы.
        var newShipLocations = [];
        //В цикле до кол-ва позиций в корабле
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                //Код горизонт корабля.
                //Новая позиция заносится в массив newShipLocations. Данные состоят из строки (начальной, вычисленной выше)
                //и столбца + i. При первой итерацииi равно 0, и сумма обозначает начальный столбец. При второй итерации
                //происходит переход к следующему столбцу, а при третьей - к следующему за ним. Так в массиве генерируется
                //серии элементов "01", "02", "03"
                newShipLocations.push(row + "" + (col + i));
            } else {
                //добавить в массив для верт корабля
                //Тоже самое для вертикального корабля. Теперь вместо столбца увеличивается строка - при каждой итерации цикла
                //к ней прибавляется i. Также не забываем добавляем строку как разделитель. 
                //В итоге для верт корабля в массиве создается серия вида "31", "41", "51"
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },

    //Метод collision получает данные корабля и проверяет, перекрывается ли хотя бы одна клетка с клетками
    //других кораблей, уже находящихся на поле. Проверка осуществляется двумя вложенными циклами for.
    //Внешний цикл перебирает все корабли модели ( в свойстве model.ships). Внутренний цикл перебирает все
    //позиции нового корабля в массиве locations и проверяет, не заняты ли какие-либо из этих клеток 
    //существующими кораблями на игровом поле.
                       //locations - массив позиций нового корабля, который мы собираемся разместить на поле.
    collision: function(locations) {
        for (var i = 0; i < this.numShips; i++) { //Для каждого корабля уже находящегося на поле..
            var ship = model.ships[i];                                         
            for (var j = 0; j < locations.length; j++) {  //..проверить, встречается ли какая-либо из позиций массива
                                                            //locations нового корабля в массиве locations существующих кораблей.
                if (ship.locations.indexOf(locations[j]) >= 0) {  //Метод indexOf проверяет, присутствует ли заданная позиция в массиве.
                                                //Таким образом, если полученный индекс больше либо равен 0, мы знаем, что клетка уже занята, 
                                                //поэтому метод возвращает true (перекрытие обнаружено)
                    //ВОзврат из цикла, выполняемого в другом цикле, немедленно прерывает оба цикла, функция немедленно
                    //завершается и возвращает true.
                    return true;
                }
            }
        }
        //Если выполнение дошло до этой точки, значит ни одна из позиций не была обнаружена в других массивах, поэтому
        //функция возвращает false (перекрытия отсутствуют)
        return false;
    }
};  
    
//Объект контроллера
var controller = {
    guesses: 0, //количество выстрелов
    processGuess: function(guess) {
    // Код метода обработчика координат выстрела и передачи их модели. Проверяет условие завершения игры.
    
    //Метод parseGuess будет использоваться для проверки введенных данных.
    var location = parseGuess(guess);
        //Если этот метод не возвращается null, значит, был получен действительный объект location.
        //!ПОМНИТЕ null является ПСЕВДОИСТИННЫМ значением
        if (location) {
            //Просто увеличиваем значение guesses на 1. Она работает точно также как i++ в цикле for.
            //Также при вводе недействительных координат мы НЕ наказываем игрока и не включаем эту попытку в подсчет.
            //Только если пользователь ввел правильные координаты, счетчик выстрелов увеличивается на 1.
            this.guesses++;
            //Затем комбинация строки и столбца передается методу fire. Напомним, что метод fire
            //возвращает true при попадании в корабль.
            var hit = model.fire(location);
            //Если выстрел попал в цель, а кол-во потопленных кораблей равно кол-ву кораблей в игре,
            //то выводится сообщение что "все корабли потоплены"
            if (hit && model.shipsSunk === model.numShips) {
                    //сообщение "все корабли потоплены"
                    view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
                                                                    //Выводим общее кол-во выстрелов, которое потребовалось
                                                                    //игроку для того, чтобы потопить корабли. Свойство guesses
                                                                    //является свойством объекта this, то есть контроллера.
            }                                                    
        }

    }

};

//Вспомогательная функция №1 - для проверки введенных значений
function parseGuess(guess) {
    //Массив заполняется всеми буквами, присутствующие в координатах
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    //Данные передаются в параметре guess. Далее проверяем данные на null и убеждаемся, что
    //в строке два символа
    if (guess === null || guess.length !== 2) {
        //Если условие не выполняется, сообщаем игроку
        alert("Oops, please enter a letter and a number on the board.");
    } else {
            //ИНАЧЕ: 
            //Извлекаем первый символ строки
            firstChar = guess.charAt(0);
            //При помощи метода indexOf получаем цифру в диапазоне от 0 до 6, соответствующую букве РЯДА.
            //*попробуйте выполнить пару примеров, чтобы понять как работает преобразование.
            var row = alphabet.indexOf(firstChar);
            //Код для получения ВТОРОГО символа, предоставляющего столбец игрового поля.
            var column = guess.charAt(1);
            //Функция isNaN выявляет строки и столбцы, которые НЕ ЯВЛЯЮТСЯ ЦИФРАМИ!
            if (isNaN(row) || isNaN(column)) {
                alert("Oops, that isn't on the board.");
              
              //Также проверяем что цифры лежат в деапазоне от 0 до 6 (даже на более общем уровне, 
              //т.к. мы запрашиваем РАЗМЕР ДОСКИ у модели, а не просто цифру 6!) 
            } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
                        //Здесь (второе) применяется преобразование типов. Переменная column содержит строковое,
                        //значение, и проверяя, что значение находится в диапазоне от 0 до 6.
                        //мы полагаемся на преобразование строки в число для выполнения сравнения.
                        
                alert("Oops, that's off the board!");

                //В этой точке все проверки пройдены, поэтому метод может вернуть результат.
            } else {
                    //Строка и столбец объединяются, а результат возвращается методом. Здесь снова
                    //задействовано преобразование типа: row-число, а column - строка, поэтому результатом
                    //также является строка.

                    return row + column;
            }
        }
        return null; //Если управление передано в эту строку, значит, какая-то проверка не прошла
                    // и метод возвращает null.
}


//Вспомогательный код - связывает обработчик событий с кнопкой Fire!
var fireButton = document.getElementById("fireButton");
//Кнопке можно назначить обработчик события нажатия - функцию handleFireButton
fireButton.onclick = handleFireButton;
//Добавляем обработчик событий нажатия клавиш в поле ввода HTML
var guessInput = document.getElementById("guessInput");
guessInput.onkeypress = handleKeyPress;

//ГЕНЕРИРУЕМ ПОЗИЦИИ
model.generateShipLocations();

// Вспомогательная функция №2 - получает данные с формы и передает их контроллеру.
// Эта функция handleFireButton будет вызываться при каждом нажатии кнопки  Fire!
function handleFireButton() {
// Получение координат от формы и передача их контроллеру.
    //Сначала мы получаем ССЫЛКУ на элемент формы по ID элемента "guessInput"
    var guessInput = document.getElementById("guessInput");
    //Затем извлекаем данные, введенные пользователем. Координаты хранятся в свойстве value эл-та input
    var guess = guessInput.value;
    //Координаты выстрела передаются контроллеру, а дальше все должно заработать как по "волшебству"
    controller.processGuess(guess);
    //Удаляем содержимое эл-та input формы, заменяя его пустой строкой. Обнуляем перед след. вводом.
    guessInput.value = "";
}

//Обработчик нажатий клавиш. Вызывается при каждом нажатии клавишь в поле input страницы.
//Браузер передает объект события обработчику. Объект содержит информацию о том, какая клавиша нажата.
function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    //Если нажата клавиша Enter, то свойство keyCode события равно 13. В таком случае кнопка Fire! 
    //должна сработать так, словно игрок щелкнул на ней. Для этого можно вызвать метод click кнопка
    //fireButton (фактически этот вызов имитирует нажатие кнопки)
    if (e.keyCode === 13) {
        //нажатие кнопки
        fireButton.click();
        //Возвращаем false, чтобы форма не делала ничего лишнего (например не пыталась передать данные)
        return false;
    }
}




}
window.onload = init; 

