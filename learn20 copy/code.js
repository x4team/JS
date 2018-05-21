/*Простейший код*/
//Присваиваем переменной access получение элемента по Id - "code9"
var access = document.getElementById("code9"); 
//Получаем HTML-содержимое элемента в виде строки
var code = access.innerHTML;
code = code + " midnight";
alert(code);