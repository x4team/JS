//При каждом нажатии кнопки сообщение в <div> обновляется и в нем выводится количество нажатий.

// БЕЗ ЗАМЫКАНИЯ
// Переменная count должна быть глобальной, потому что если сделать ее локальной для handleClick
// (обработчик события щелчка на кнопке - см. ниже), эта переменная будет повторно инициализироваться
// при каждом нажатии кнопки
var count = 0; 

// В функции обработчика события load мы получаем элемент кнопки и добавляем обработчик щелчка в свойство onclick.
window.onload = function() {
  var button = document.getElementById("clickme");
  button.onclick = handleClick;
};

// Функция-обработчик события щелчка на кнопке
function handleClick() {
  var message = "You clicked me "; // Мы определяем переменную message...
  var div = document.getElementById("message"); // ...получаем элемент <div> из страницы...
  count++; // ...увеличиваем счетчик...
  div.innerHTML = message + count + " times!"; // ...и обновляем <div> сообщением с количеством нажатий.
}


// ПРОГРАММА С ЗАМЫКАНИЕМ
// Не используем  глобальную переменную, с которой могут быть проблемы.

window.onload = function() {
  // Теперь все переменные локальны по отношению к window.onload. Никаких проблем с конфликтами имен.
  var count = 0;
  var message = "You clicked me ";
  var div = document.getElementById("message");

  var button = document.getElementById("clickme");
  button.onclick = function() {  // Обработчик назначается как функциональное выражение, присваиваемое свойству
                                // onclick кнопки, поэтому мы можем обращаться к div, message и count в функции.
    count++;                    // (Помните про лексическую область действия!)
    div.innerHTML = message + count + " times!";

  }; // Функция содержит три свободные переменные: div,
     // message и count, поэтому для функции - обработчика
     // click создается замыкание. Таким образом, свойству
     // onclick кнопки назначается замыкание.

};


