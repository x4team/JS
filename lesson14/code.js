//Создание объекта 1

var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021
};

//Создание объекта 2

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000
};

//Обращение к свойству объекта происходит через имя объекта и ТОЧКУ, а затем нужно указать имя свойства.

var miles = fiat.mileage; //Сначала указывается переменная, в которой хранится объект, затем ТОЧКА и ИМЯ свойства/
if (miles < 2000) {
  buyIt();
}
//В ПЕРЕМЕННО miles не хранится сам объект! Там хранится лишь ССЫЛКА на объект!

//Как изменить свойство
fiat.mileage = 10000;

//Как добавить новое свойство
fiat.needsWashing = true;

//Как удалить свойство
delete fiat.needsWashing; 
//Выражение delete возвращает true, если удаление свойства прошло успешно. delete вернет false только в том
//случае, когда свойство не было удалено (например, если свойство входит в защищенный объект, принадлежащий
// браузеру). true возвращается даже в том случае, если свойство, которое вы пытаетесь удалить, не существует в объекте. 

//Узнать все об объекте
console.log(fiat);

//Вычисления со свойствами
if (fiat.year < 1965) {
  classic = true;
}
for (var i = 0; i < fiat.passengers; i++) {
    //addPersonToCar();
}

//Небольшой пример

var dog = {
  name: "Fido",
  weight: 20.2,
  age: 4,
  breed: "mixed",
  activity: "fetch balls"
};
var bark;
if (dog.weight > 20) {
  bark = "WOOF WOOF";
} else {
  bark = "woof woof";
}

var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);
