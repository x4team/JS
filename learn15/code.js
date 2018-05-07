//Создаем объект taxi и присваиваем его переменной taxi. Конечно, переменная taxi содержит не сам объект, а ссылку на него.

var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341
};

//Вызываем функцию prequal и передаем ей аргумент taxi, который связывается с параметром car функции.
function prequal(car) {         //car указывает на тот же объект, что и taxi!
  //В теле функции выполняются проверки с использованием объекта taxi в параметре car.
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  //В данном случае пробег больше 10000 миль, поэтому prequal возвращает false. Жаль, хорошая была бы машина
  return true;
}

//К сожалению, такси уже набрало основательный пробег, поэтому первая проверка car.mileage > 10000 дает результат
// true. Функция возвращает false, и переменной worthALook также присваивается false. На консоль выводится сообщение
// о том, что машина не прошла проверку.
var worthALook = prequal(taxi);

if (worthALook) {
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
  console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}