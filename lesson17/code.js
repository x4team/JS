//Эта программа напоминает Генератор Красивых Фраз из главы 4, но в место слов в ней используются свойства
//машин, а вместо маркетинговых фраз генерируются новые объекты car!

function  makeCar() {
  var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
  var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years = [1955, 1957, 1960, 1946, 1954];
  var colors = ["red", "blue", "green", "yellow", "white"];
  var convertible = [true, false];

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1; //Вместительность пассажиров от 1 и выше
  var rand6 = Math.floor(Math.random() * 2); //Вычисляет рандомное число от 0 до 1 (методом умножения 
                                            // его на 2) 
                                            //*к примеру 0,6234234 будет 0; 1,2342355 будет 2.
  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6], //свойство convertible принимает true или false в зависимости от rand6
    mileage: 0
  };
  return car;
}

function displayCar(car) {
  console.log("Your new car is a " + car.year + " " + car.make + " " + car.model + " " + car.color + " convertible: " + car.convertible + " passengers: " + car.passengers);
}

var carToSell = makeCar();
displayCar(carToSell);
console.log(Math.floor(Math.random() * 2));