//Методы - это функции, определенные в объектах.

/* var fiat = {
  make: "Fiat",
  model: "500",
  yaer: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  drive: function() {         //Тут присвоили функцию СВОЙСТВУ. Мы не указываем имя функции, оно совпадает с именем 
    alert("Zoom zoom!");  // свойства!  * fiat.drive()*
  }
};   //ОБЯЗАТЕЛЬНО ставить точку с запятой в конце объекта
*/

// При вызове функции  drive (С СЕГОДНЯШНЕГО ДНЯ МЕТОДА!) тоже испоьзуется точечная запись, но на этот раз
// с именем объекта fiat и именем свойства drive, только за именем свойства следуют круглые скобки (как 
// привызове другой функции)
//fiat.drive();

//Теперь машину fiat мы будем заводить, только после того как будет запущен двигатель.
//Нам надо:
//1)Булевское свойство для хранения состояния двигателя (запущен или нет)
//2)Пара методов для запуска и остановки двигателя
//3)Условная проверка в методе drive, которая удостоверяется, что двигатель запущен, прежде чем машина поехала.



var fiat = {
  make: "Fiat",
  model: "500",
  yaer: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,

  start: function() {
    this.started = true; //ПОСКОЛЬКУ для JS мы не указали изначально что started это свойство, то используем THIS! 
  },                     //для того чтобы не писать fiat.started (THIS используется ВНУТРИ ОБЪЕКТА)

  stop: function() {
    this.started = false;
  },

  drive: function() {
    if (this.started) {
      alert("Zoom Zoom!");
    } else {
        alert("You need to start the engine first."); //Если двигатель запущен, то при вызове drive выводится 
    }                                               //сообщение "Zoom zoom", а если нет - предупреждение
  }                                                  // о том, что сначала нужно запустить двигатель
};  //ОБЯЗАТЕЛЬНО ставить точку с запятой в конце объекта

fiat.drive(); //Сначала мы ведем машину с неработающим двигателем
fiat["start"](); //Потом догадаемся запустить машину  //ВОЗМОЖНО ТАК ОБРАЩАТЬСЯ К СВОЙСТВАМ ОБЪЕКТА ЧЕРЕЗ [ ""]
fiat["dri" + "ve"](); //В итоге мы поведем машину //ВОЗМОЖНО ТАК ОБРАЩАТЬСЯ К СВОЙСТВАМ ОБЪЕКТА ЧЕРЕЗ [ ""]
fiat.stop();  //И остановимся когда надо


/*
var song = {
    name: "Walk This Way",
    artist: "Run-D.M.C.",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    
    play: function() {
        if(!this.playing) {
            this.playing=true;
            console.log("Playing " + this.name + " by " + this.artist);
        }
    },
    
    pause: function() {
        if (this.playing) {
            this.playing = false;
        }
    }
};

song.play();
song.pause();
*/
