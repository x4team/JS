//Событие - изменение размера окна браузера
window.onresize = resize; 

//обработчик события
function resize () {     
  var element = document.getElementById("display");
  element.innerHTML = element.innerHTML + " that tickles!";
}





