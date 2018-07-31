// Конструктор для создания собак
// ВНИМАНИЕ! Имя конструктора начинается с БОЛЬШОЙ буквы, это внегласное правило для разработчиков
  // Конструктор выглядит как обычная функция. 
  // Параметры функции соответстсвуют свойства, которые должны передаваться при вызове для каждого создаваемого объекта.
function Dog(name, breed, weight) {
  // Эта часть больше похожа на олбъект: значения параметров присваиваются переменным, которые похожи на свойства.
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  // Здесь не используются локальные переменные, как во многих функциях. Вместо них используется ключевое слово
  // this, которое ранее нам встречалось только внутри объектов.
  // ТАКЖЕ обратите внимание, что конструктор ничего не возвращает.
  // И также имена свойств и параметров не обязаны совпадать, но часто совпадатю - это еще одно удобное соглашение.
}

//Создаем собаку с кличкой Fido, смешанной породы и весом 38 фунтов
 var fido = new Dog("Fido", "Mixed", 38); //ИСПОЛЬЗУЕТСЯ оператор new!

 var spot = new Dog("Spot", "Chihuahua", 10);

/********
 Как происходит создание объекта?
 1) Сначала new создает новый, пустой объект
 2) Затем new заносит в this ссылку на новый объект
 3) После подготовки this вызывается функция Dog, которой передаются аргументы "Fido", "Mixed", 38
 4) Затем вызывается тело функции. Как и большинство конструкторов, Dog задает значения свойств только
    что созданного объекта this.
 5) Наконец, после того как функция Dog будет выполнена, оператор new возвращает this, то есть ссылку
    на только что созданный объект. Обратите внимание: ссылка this возвращается автоматически, вам не
    придется явно возвращать ее в своем коде. И после того как новый объект будет возвращен, эта ссылка
    присваивается переменной fido.
*********/


// МЕТОДЫ в конструкторах

function DogWithMethod(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  // ЧТОБЫ добавить в создаваемые объекты метод bark, мы просто назначаем функцию(в данном случае анонимную свойству this.bark)
  this.bark = function() {
    if (this.weight > 25) {
      alert(this.name + " says Woof!");
    } else {
      alert(this.name + " says Yip!");
    }
  };
}

// Тест драйв
 var sharik = new DogWithMethod("Sharik", "Mixed", 38); 
 var tuzik = new DogWithMethod("Tuzik", "Mixed", 24);
 var muhtar = new DogWithMethod("Muhtar", "Ovcharka", 90);
 var dogs = [sharik, tuzik, muhtar];

 //Перебираем ссылки на объекты в массиве
 for (var i = 0; i < dogs.length; i++) {
  dogs[i].bark();
 }

/*****
 УПРАЖНЕНИЕ №1
 У нас есть конструктор для создания объектов, представляющих разные кофейные напитки, но в этом конструкторе
 нет методов.

 Нам понадобится метод getSize, который возвращает строку в зависимости от объема напитка (в унциях):
 8 - small
 12 - medium
 16 - large

 Также нужен метод toString, который возвращает строку с описанием заказа, например:
 "You've ordered a small House Blend coffe".

 Запишите свой код внизу, а затем протестируйте его в браузере. Попробуйте создать несколько напитков с разными
 объемами. Прежде чем двигаться дальше, сверьтесь с ответами.
 *****/

 function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;
  this.getSize = function() {
    if(this.ounces > 15) {
      return "large";
    } else if (this.ounces < 12) {
      return "small";
    } else { return "medium";}
  };
  this.toString = function() {
    return "You've ordered a " +this.getSize()+" "+this.roast+" coffee.";
  };
 }

 var houseBlend = new Coffee("House Blend", 12);
 // console.log(houseBlend.toString());

 var darkRoast = new Coffee("Dark Roast", 16);
 // console.log(darkRoast.toString());


// Функция-конструктор автомобилей. ЗДЕСЬ ПРОБЛЕМА В СЛИШКОМ БОЛЬШОМ КОЛ-ВЕ ПАРАМЕТРОВ (можно сделать ошибки
// при передаче аргументов) РЕШЕНИЕ: БЕРЕМ ВСЕ АРГУМЕНТЫ, ОБЪЕДИНЯЕМ ИХ В ОБЪЕКТНЫЙ ЛИТЕРАЛ, а затем передаем
// этот литерал своей функции - см в след примере.
 function Car(make, model, year, color, passengers, convertible, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.passengers = passengers;
  this.convertible = convertible;
  this.mileage = mileage;
  this.started = false;

  this.start = function() {
    this.started = true;
  },

  this.stop = function() {
    this.started = false;
  },

  this.drive = function() {
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoom zoom!");
    } else {
      console.log("Start the engine first.");
    }
  };
 }

// Создаем машины. 
   var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
   var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
   var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

var cars = [chevy, cadi, testCar];

for(var i = 0; i < cars.length; i++) {
  cars[i].start();
  cars[i].drive();
  cars[i].drive();  
  cars[i].stop();  
}


// ПРЕОБРАЗОВАНИЕ АРГУМЕНТОВ В ОБЪЕКТНЫЙ ЛИТЕРАЛ
  // Возьмем вызов конструктора Car и преобразуем набор его аргументов в объектный литерал:
                            // И вроде бы небольшое изменение, а код становится намного чище и понятнее.
  var cadiParams = { make: "GM",
                     model: "Cadillac",
                     year: 1955,
                     color: "tan",
                     passengers: 5,
                     convertible: false,
                     mileage: 12892 };
  // ТЕПЕРЬ конструктору Car передается ОДИН аргумент.                   
  var cadi2 = new CarNew(cadiParams);  

// ПРЕОБРАЗОВАНИЕ КОНСТРУКТОРА Car
                // Семь параметров конструктора Car заменяются одним параметром для передаваемого объекта.
function CarNew(params) {
  this.make = params.make;  // Каждая ссылка на параметр заменяется соответствующим СВОЙСТВА ОБЪЕКТА (cadiParams), переданного функции.
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;
  this.started = false;

  this.start = function() {
    this.started = true;
  },

  this.stop = function() {
    this.started = false;
  },

  this.drive = function() {
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoom zoom!");
    } else {
      console.log("Start the engine first.");
    }
  };

}
// Тестирование функции-конструктора с переданными параметрами объекта
var cars2 = [cadi2];

for(var i = 0; i < cars2.length; i++) {
  cars2[i].start();
  cars2[i].drive();
  cars2[i].drive();  
  cars2[i].stop();  
}

// УПРАЖНЕНИЕ 1
var limoParams = { make: "Webville Motors",
                   model: "limo",
                   year: 1983,
                   color: "black",
                   passengers: 12,
                   convertible: true,
                   mileage: 21120 };

// Создаем 2 объекта посредством передачи параметров оператору new
var limo = new CarNew(limoParams);
// Создаем ЭКЗЕМПЛЯР конструктора DogWithMethod
var limoDog = new DogWithMethod("Rhapsody In Blue", "Poodle", 40);

console.log(limo.make + " " + limo.model + " is a " + typeof limo);
 // Оператор new при создании объекта незаметно сохраняет служебную информацию, по которой можно легко определить,
 // каким конструктором был создан объект. 
 // Оператор instanceof использует эту информацию для проверки того, является ли объект экземпляром, созданным
 // указанным конструктором.
if (limoDog instanceof DogWithMethod) {
            // Выводим к какому типу принадлежит limoDog и удостоверяемся что созданы DoWithMethod конструктором
        console.log(limoDog.name + " is a " + typeof limoDog + " and made DogWithMethod constructor "); 
      };



// КОНСТРУКТОРЫ ( НАБОРЫ JS )

// Создает новый объект (возвращает экземпляр Date), представляющий текущую дату и время.
var now = new Date();
console.log(now); //Fri Jul 27 2018 18:11:31 GMT+0300 (Moscow Standard Time)

var dateString = now.toString(); // Возвращает строковое представление даты типа "Thu Feb 06..."

var theYear = now.getFullYear(); // Возвращает год из даты

var theDayOfWeek = now.getDay(); // Возвращает номер дня недели, представленного объектом даты, например 1 (понедельник)

// Допустим нам понадобился объект даты, представляющий 1 мая 1983 года

var birthday = new Date("May 1, 1983"); // Конструктору можно передать простую строку с датой.

var birthday2 = new Date("May 1, 1983 08:03 pm"); // А можно дополнить дату временем.


// ОБЪЕКТ Array
// Массивы можно создавать также через конструктор
var emptyArray = new Array(); //Создается пустой массив нулевой длины

// Создаем массив для 3 элементов
var oddNumbers = new Array(3);
oddNumbers[0] = 1; // И заполняем их после создания
oddNumbers[1] = 3;
oddNumbers[2] = 5;

// НЕСКОЛЬКО ИНТЕРЕСНЫХ МЕТОДОВ для массива
oddNumbers.reverse(); // Перестановка значений массива в обратном порядке. (ИЗМЕНЯЕТСЯ ИСХОДНЫЙ МАССИВ, а не копия)

var aString = oddNumbers.join(" - "); // Метод join создаети строку из значение массива, разделяя их знаком " - "
                                      // и возвращает новую строку "5 - 3 - 1"

var areAllOdd = oddNumbers.every(function(x) { // Метод every получает функцию, и для каждого значения в массиве
      return ((x % 2) !== 0);                  // проверяет, какой результат вернет функция для этого значения - true
});                                            // или false. Если функция возвращает true для всех элементов массива, то
                                               // и метод every возвращает true


// СОЗДАНИЕ МАССИВОВ ЛИТЕРАЛЬНОЕ И ЧЕРЕЗ КОНСТРУКТОР

var items  = ["a", "b", "c"]; // литеральный синтаксис (преимущественно при ручном создании небольших массивов)
var items2 = new Array ("a", "b", "c"); // через конструктор (преимущественно когда размер неизвестен, см. ниже)

// СОЗДАНИЕ МАССИВА, КОГДА РАЗМЕР НЕИЗВЕСТЕН
// var n = getNumberOfWidgetsFromDatabase();
// var widgets = new Array(n);
// for(var i = 0; i < n; i++) {
//   widgets[i] = getDatavaseRecord(i);
// }


// ДРУГИЕ ВСТРОЕННЫЕ ОБЪЕКТЫ

// Object - Конструктор Object создает объекты. Как и в случае с массивами, литеральный синтаксис объектов { } эквивалентен
//          new Object(). 
// Math   - Объект содержит свойства и методы математических операций (например, Math.PI и Math.random())
// RegExp - Конструктор предназначен для создания объектов регулярных выражений, выполняющих поиск текста по шаблону
//          (достаточно сложному).
// Error  - Конструктор создает стандартные объекты ошибок, которые будут полезны, если вы перехватываете ошибки в своем коде. 











