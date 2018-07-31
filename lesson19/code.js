//Объекты обладают состоянием и поведением.
//Свойства объекта позволяют хранить данные текущего СОСТОЯНИЕ - уровень бензина и тд
//Методы объекта позволяют наделять объекты ПОВЕДЕНИЕМ - запустить машину и тд
//СОСТОЯНИЕ и ПОВЕДВЕНИЕ связаны вместе
//
//Рассмотрим пример и добавим в автомоиль датчик бензина, а затем соответствующее поведение.
//Уровень топлива будет свойством fuel, а заправку будет выполнять метод addFuel. У метода addFuel имеется
//параметр amount, который будет использоваться как прибавление уровня топлива в свойстве fuel.
//Итак, добавьте следующие свойства в объекте fiat:

var fiat = {
  make: "Fiat",
  model: "500",
  //Здесь идут другие свойства...
  started: false,
  fuel: 0, //Добавили новое свойство fuel (количество бензина в машине). В начале существования объекта - бензобак пуст
  handbrake: true,

  start: function() {
    if (this.fuel > 0) {
    this.started = true; }
    else { alert ("The car is on empty FUEL, fill up before starting!");
         }

  },
  /* Проверяем заглушен ли двигатель? Если не заглушен, то глушим */
  stop: function() {
    if (this.started) {
    this.started = false;
    alert("Engine is stoped!");
    }
  },
  drive: function() {
    if (this.started) {
              /* Прежде чем выехать, мы убеждаемся, что в машине есть топливо. И если машина едет,
                 количество бензина должно уменьшаться при каждом вызове. */
            if ((this.fuel > 0)&&(!this.handbrake)) {
              alert(this.make + " " + this.model + " goes zoom zoom!");
              this.fuel = this.fuel - 1;
              /* Рассмотрим дополнительный вариант, если топливо есть, но ручник не убран, то
              машина выдаст предупреждение, что "Расход топлива превышает в 2 раза, возможно не
              убран ручник!""  */
            } else if ((this.fuel > 0)&&(this.handbrake)){
              alert(this.make + " " + this.model + " goes zoom zoom! *The FUEL consumption increased 2 times. Perhaps not removed the handbrake!");
              this.fuel = this.fuel - 2;
               }
              else {
              /* Если бензина не осталось, мы выводим сообщение и останавливаем двигатель. Чтобы снова
                 завести машину, необходимо добавить бензина и снова запустить двигатель. */
              alert("Uh oh, out of fuel.");
              this.stop();
            }
    } else {
      alert("You need to start the engine first.");
    }
  },
  addFuel: function(amount) {    //Метод addFuel для заправки машины. Количество добавляемого топлива задается
    this.fuel = this.fuel + amount; // параметром amount при вызове метода
  },

  takeOffHandbrake: function() {
    this.handbrake = false;
    alert("Handbrake is take off!");
  }

};


fiat.takeOffHandbrake(); //Снимаем ручник 
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.stop(); 
