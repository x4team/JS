// ОБЪЕКТЫ И ПРОТОТИПЫ (НАСЛЕДОВАНИЕ ЧЕРЕЗ ПРОТОТИПЫ)!
// При создании множества объектов из одного конструктора возникает проблема, что свойства все разыне, а методы дублируются.
// Но в JS это решается НАСЛДОВАНИЕМ свойств и поведения от ДРУГИХ объектов!
// Тоесть НАСЛЕДОВАНИЕ ЧЕРЕЗ ПРОТОТИПЫ!
// ВСЯ СУТЬ этой схемы заключается в наследовании и повторном использовании существующих свойств (включая методы), 
// с расширением свойств во вновь созданном объекте.

// К ПРИМЕРУ ПРОТОТИП СОБАКИ
/******************
*    ПРОТОТИП     * <- Прототип для создания собак: объект со свойствами и методами, которые могут понадобится каждой собаке.
*******************
*species: "Canine"* <- Содержит свойства, необходимые каждой собаке. Прототип НЕ ВКЛЮЧАЕТ уникальные свойства! (Клички, порода, вес)
*******************
*bark()           *
*run()            * <- Поведение, которое должно поддерживаться всеми создаваемыми собаками. 
*wag()            *
*******************/ 

/*** Имея прототип собаки, мы можем создавать объекты собак, наследующие свойства прототипа. Объект собаки также может
 *** дополнять набор свойств прототипа другим свойствами и поведением, присущими конкретным собакам. Например, мы можем
 *** добавить в объект каждой собаки свойства для клички, породы и веса. ТОЕСТЬ если какой-либо собаке нужно будет лаять,
 *** бегать или махать хвостом, она может воспользоваться поведением, унаследованным от прототипа. 
 *** - И ПОМНИТЕ! В ПРОТОТИП ВКЛЮЧАЮТСЯ МЕТОДЫ И СВОЙСТВА, ОБЩИЕ ДЛЯ ВСЕХ СОБАК, ПОТОМУ ЧТО ОНИ БУДУТ НАСЛЕДОВАТЬСЯ 
 ***   ВСЕМИ СОБАКАМИ*/

 // КАК РАБОТАЕТ НАСЛЕДОВАНИЕ?
  // К примеру, мы обращаемся к методу bark() собаки Fido, но в объекте Fido этого метода нет. Тогда мы идем выше к ПРОТОТИПУ.
  // НАКОНЕЦ находим метод bark() и вызываем его.
  // Свойства работают примерно ТАКЖЕ.


// ПЕРЕОПРЕДЕЛЕНИЕ ПРОТОТИПА!
// ***Что если, собаке НЕ НРАВИТСЯ метод bark, и она хочет лаять громчке и буквами WOOF?
// Даже если ваш объект что-то наследует от прототипа, это не значит, что вам придется непременно пользоваться "наследством".
// Свойства и методы всегда можно ПЕРЕОПРЕДЕЛИТЬ в объекте. Переопределение работает, потому что JavaScript всегда обращается
// за свойством к экземпляру (тоесть конкретному объекту собаки) ДО ТОГО, как продолжить поиски в прототипе. СЛЕДОВАТЕЛЬНО,
// если вы хотите использовать для объекта собаки - spot нестандартный метод bark, вам достаточно ВКЛЮЧИТЬ свой реализацию
// в объекте spot. 

// ИТАК как же создать или получить ПРОТОТИП?
/*
Dog.prototype // Присмотревшись к конструктору Dog, вы обнаружите в нем свойство prototype, в котором хранится ссылка
*/			  // на фактический прототип.
// НО, Dog ведь это функция-конструктор!? Ответ: В JS ФУНКЦИИ ЯВЛЯЮТСЯ ОБЪЕКТАМИ! Фактически ВСЕ базируется на объектах.

// ВАЖНО! ОБЪЕКТ-ПРОТОТИП задается в свойстве prototype конструктора Dog! Но КАКИЕ СВОЙСТВА и МЕТОДЫ включает прототип?
// ПОКА вы не зададите их самостоятельно -ПРАКТИЧЕСКИ НИКАКИХ! Другими словами, вам придется добавить свойства и методы
// в прототип самостоятельно. Обычно это делается ДО того, как мы начнем использовать конструктор.

// ИТАК, создадим прототип объектов, представляющих собак. Сначала нам понадобится конструктор:

function Dog(name,breed, weight) {
	this.name = name; // Каждый экземпляр содержит отдельный набор свойств name, breed, weight, поэтому они будут включены в конструктор
	this.breed = breed;
	this.weight = weight;
	// Методы будут наследоваться от прототипа, в конструкторе они не нужны.
}

// ДАЛЕЕ мы хотим чтобы ПРОТОТИП содержал свойства species и bark, а также методы run и wag:

Dog.prototype.species = "Canine"; // Строка "Canine" задается свойству species прототипа.
// Для каждого метода соответствующая функция назначается свойствам bark, run и. wag прототипа.
Dog.prototype.bark = function() {
	if (this.weight > 25) {
		console.log(this.name + " says Woof!");
	} else {
		console.log(this.name + " says Yip!"); 
	}
};

Dog.prototype.run = function() {
	console.log("Run!");
};
// ПОЯСНЕНИЕ: Начинаем с объекта Dog и получаем его свойство prototype, которое содержит ссылку на объект со св-ом species
Dog.prototype.wag = function() {
	console.log("Wag!");
};
// Положение собаки (по умолчанию НЕ СИДИТ)
Dog.prototype.sitting = false;

// Метод - сесть собаке.
Dog.prototype.sit = function() {
	if(this.sitting) {
	console.log(this.name + " is already sitting");
	} else {
		// ЗАПОМНИТЬ ЧТО ЗДЕСЬ УЖЕ ЗНАЧЕНИЕ ПЕРЕОПРЕДЕЛЯЕТСЯ ЭКЗЕМПЛЯРУ, а не берется из прототипа!
		// ***Тоесть в объект добавляется новое свойство sitting
		this.sitting = true;
		console.log(this.name + " is now sitting");
	}
};


// ЧЕМПИОН ПОРОДЫ! 
// stack() - команда "стоять".
// gait() - разные варианты движения. Метод получает строковый аргумент: "walk", "trot", "pace", "gallop"
// bait() - дать собаке лакомство
// groom() - купание и уход

// Dog.class_name.prototype.method_name = function(first_argument) {
// 	// body...
// };

// СОЗДАНИЕ ЦЕПОЧКИ ПРОТОТИПОВ 
	// Создание прототипа выставочной собаки. Для начала нам понадобится объект, наследующий от прототипа собаки.
	// ТОЕСТЬ прототипа выставочной собаки - объект, наследующий от прототипа собаки.
var aDog = new Dog(); // ЗАМЕТИЛИ что нет аргументов.
					  // Этот код создает объект, наследующий от прототипа собаки (ранее также создавались экземпляры собак)
					  // В ИТОГЕ МЫ СОЗДАЛИ ПУСТОЙ ОБЪЕКТ ОТ ПРОТОТИПА СОБАКИ
// Теперь нам понадобится прототип выставочной собаки. Как и экземпляр собаки, это всего лишь объект, наследующий
// от прототипа собаки.
// ПРЕОБРАЗОВЫВАЕМ экземпляр собаки в прототип выставочной собаки!
	// Для начала создадим конструктор прототипа выставочной собаки
function ShowDog(name, breed, weight, handler) {
	// ДУБЛИРУЕТСЯ КОД, Т.К. ЭТО ЕСТЬ В КОНСТРУКТОРЕ Dog, ПОЭТОМУ ВЫЗЫВАЕМ call
	// this.name = name;
	// this.breed = breed;
	// this.weight = weight;
		// Вызов метода Dog.call 
		// call - встроенный метод, который может использоваться с любой функции. Dog.call вызывает функцию Dog и передает
		// ей объект, который должен использоваться как this, вместе со всеми аргументами функции Dog.
		Dog.call(this, name, breed, weight); 
		// Разберем подробнее:
		// 1) Dog - вызываемая функция
		// 2) this - Используется как this в теле функции Dog. Но приказываем ему использовать наш экземпляр ShowDog как
		//    текущий объект this. Соответственно, функция Dog задает свойства name, breed и weight объекта ShowDog
		// 3) name, breed, weight - остальные аргументы передаются как обычно
		// 4) ***p.s. call - вызываемый метод. Он обеспечивает вызов функции Dog. Мы используем метод call вместо
		//       прямого вызова Dog, чтобы управлять значением this.
		// ЭТИ ТРИ СВОЙСТВА (name, breed, weight) НАЗНАЧАЮТСЯ В this КОДОМ ФУНКЦИИ Dog
	
	this.handler = handler;
}
 // Теперь когда у нас есть конструктор, мы можем задать его свойству prototype новый экземпляр собаки:
 ShowDog.ptototype = new Dog(); // Мы могли бы воспользоваться экземпляром собаки, созданным на предыдущей странице, 
 								// но вместо этого можно пропустить присваивание и напрямую назначить новый объект
 								// свойству prototype.
 					// ПОМНИТЕ! Прототип выставочной собаки ВСЕ РАВНО остается экземпляром собаки!
// ЗАПОЛНЯЕМ ПРОТОТИП
ShowDog.prototype.constructor = ShowDog;
ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function() {
	console.log("Stack");
};
ShowDog.prototype.bait = function() {
	console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
	console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
	console.log("Groom");
};



// ТЕПЕРЬ СОЗДАЕМ ОБЪЕКТЫ как обычно...
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var barnaby = new Dog("Barnaby", "Basser Hound", 55);
//Создаем ЭКЗЕМПЛЯР выставочной собаки кличке Scotty
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");
// ОПРЕДЕЛЯЕМ УНИКАЛЬНЫЙ МЕТОД WOOF для Spot
	// *** Здесь может показаться, что this.name должен указывать не на САМ объект, а на ПРОТОТИП! Т.к. вызывается он из
	// прототипа. Но на самом деле это НЕ ТАК! Когда мы вызываем метод объекта, ссылке this присваивается ОБЪЕКТ, метод
	// которого был вызван. Если метод в этом объекте отсутствует, но обнаруживается в прототипе, это не влияет на значение
	// this. Ссфлка this всегда ссылается на ИСХОДНЫЙ ОБЪЕКТ - тоесть объект, метод которого был вызван, даже если метод
	// находится в прототипе.
spot.bark = function() {
	console.log(this.name + " says WOOF");
};


//КАК ОПРЕДЕЛИТЬ ОТКУДА ВЗЯТО ЗАНЧЕНИЕ СВОЙСТВА (из экземпляра или прототипа)?
// *** ВОСПОЛЬЗУЙТЕСЬ методом hasOwnProperty, если возвращает true, то значение определено в экземпляре объекта
spot.hasOwnProperty("species"); //false
fido.hasOwnProperty("species"); //false
spot.sitting = true;
spot.hasOwnProperty("sitting"); //true - своство определено в экземпляре объекта


fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

barnaby.sit();
scotty.stack();


console.log(typeof scotty.bark);
console.log(scotty.league);
console.log(scotty.species);
console.log(scotty instanceof Dog);
console.log(scotty instanceof ShowDog);
console.log("Scotty constructor is " + scotty.constructor);


// О ДИНАМИЧЕСКИХ ПРОТОТИПАХ
 // Теперь метод sit для собак доступен также всем собакам


// УПРАЖНЕНИЕ: Настроить свойства и методы и прототипы для Robots
	// Базовый конструктор Robot. Ваша хажача - настроить его прототипэ
function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}
// Прототипы для роботов
Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.speak = function() {
	console.log(this.name + " is now speak ...!");
};
Robot.prototype.makeCoffee = function() {
	console.log(this.name + " is now to make a coffee (code4)");
};
Robot.prototype.blinkLights = function() {
	console.log(this.name + " is now blink a light");
};

var robby = new Robot("Robby", 1956, "Dr.Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = true;
robby.makeCoffee = function() {
	console.log(this.name + " run to Starbucks!");
};

rosie.cleanHouse = function() {
	console.log(this.name + "is now clean the house!");
};

console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();
rosie.makeCoffee();


// УПРАЖНЕНИЕ - Компьютерная игра с роботами выше. В этой игре при достижении игроком уровня 43 у робота включается
// новая способность: лазерный луч. Допишите приведенный ниже код, чтобы на уровне 42 лазерный луч включился у обоих
// роботов, Робби и Рози. 

function Game() {
	this.level = 0;
}

Game.prototype.play = function() {
	// Действие игрока
	this.level++;
	console.log("Welcome to level " + this.level);
	this.unlock();
}

Game.prototype.unlock = function() {
	if (this.level === 42) {
	Robot.prototype.deployLaser = function() {
		console.log(this.name + " is blasting you with laser beams");
	}
  }
}



var game = new Game();
//Объекты роботов определены выше

while (game.level < 42) {
	game.play();
}

robby.deployLaser();
rosie.deployLaser();


// Применяем наследование с пользой... РАСШИРЯЯ ВСТРОЕННЫЙ ОБЪЕКТ
// Мы хотим расширить прототип String методом cliche, который возвращает true, если строка содержит банальные
// выражения из заранее известного списка.
		// В прототип String добавляется метод cliche
String.prototype.cliche = function() {
			// Определяем клише, которые нужно найти в тексте
	var cliche = ["lock and load", "touch base", "open the kimono"];
			// Перебираем массив с клише
	for (var i = 0; i < cliche.length; i++) {
				// Используем функцию indexOf объекта String. Если поиск успешный, то вернется true
		var index = this.indexOf(cliche[i]); // Обратите внимание: this-строка, для которой используется метод cliche
		if (index >= 0) {
			return true;
		}
	}
	return false;
};

String.prototype.palindrome = function() {
	var reversePalindrome = this.split("").reverse().join("");
	if (reversePalindrome == this) {
		return true;
	}
	return false;
};

// Проверяем метод cliche
var sentences = ["I'll send my car around to pick you up.", "ono",
				 "Let's touch base in the morning and see where we are",
				 "We don't want to open the kimono, we just want to inform them."];

for (var i = 0; i < sentences.length; i++) {
	var phrase = sentences[i];
		// JS АВТОМАТИЧЕСКИ преобразует каждую строку в объект  String.
	if (phrase.cliche()) {
		console.log("CLICHE ALERT: " +phrase);
	} else if (phrase.palindrome()) {
		console.log("PALINDROME ALERT: " +phrase);
	}
}











