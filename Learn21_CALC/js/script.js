/*
	свойства
	события
	методы




var text = document.querySelector('#text');

text.onclick = function(){
	
	//text.innerHTML = 'ура'; //заменить текст по клику 
	text.innerHTML = 'ура'; //добавить текст по клику 
	text.className = 'test';
	text.style.color = 'red'; //изменить цвет текста по клику
	text.style.fontSize = '30px';
}

*/
  
//СДЕЛАТЬ ЧТОБЫ ПРИ КЛИКЕ НА ДЕЙСТВИЯ (+,-) и т.д. не обнулялось .value, а сразу считало!


var calc = {
  inputDigits: 0,
  addition: 0,
  subtraction: 0,
  calculate: 0,
  logAction: ['тест'],

  btnDigitsClick: function (el) {
  document.getElementById('input_digits').value += el.value;
  this.inputDigits = document.getElementById('input_digits').value;
  },

  btnCommaClick: function (el) {
  document.getElementById('input_digits').value += el.value;
  this.inputDigits = document.getElementById('input_digits').value;
  this.disabled = 'disabled';
  },

  btnAdditionClick: function () {
  this.addition = parseInt(document.getElementById('input_digits').value);
  this.calculate = this.calculate + this.addition;
  //После добавления значений в переменную calculate, обнуляемся
  document.getElementById('input_digits').value = '';
  this.addition = 0;
  //Добавляем в логи действие "+" в конец массива logAction
  this.logAction.push('+'); 
  },

  btnSubtractionClick: function () {
  this.subtraction = parseInt(document.getElementById('input_digits').value);
  this.calculate = this.calculate + this.subtraction;
  //После добавления значений в переменную calculate, обнуляемся
  document.getElementById('input_digits').value = '';
  this.subtraction = 0;
  //Добавляем в логи действие "-" в конец массива logAction
  this.logAction.push('-'); 
  },

  btnCalculateClick: function () {
  let tempvalue = document.getElementById('input_digits').value;
  /* Перед вызовом calculate, проверяем последнее введенное значение value, и если оно НЕ пустое, 
     то выполняем предыдущее действие, записанное в массив logAction(сложение, вычитание, 
     деление, или умножение) */   
  if (tempvalue!='') {
     if (this.logAction[this.logAction.length - 1]=='+') {
    this.calculate = parseInt(this.calculate) + parseInt(tempvalue);
      } else if (this.logAction[this.logAction.length - 1]=='-') {
    this.calculate = parseInt(this.calculate) - parseInt(tempvalue);
    }
  document.getElementById('input_digits').value = parseInt(this.calculate);
  this.calculate = 0;
  tempvalue = 0;
  }
  },

  btnAC: function () {
  //Обнуляем все
  this.calculate = 0;
  this.addition = 0;
  this.subtraction = 0;
  document.getElementById('input_digits').value = ''; 
  },

};

/*
document.getElementById("btn_calculate").onclick = function() {
  alert(document.getElementById('input_digits').value);
} */


/*
document.getElementById("btn_1").onclick = function () {
      document.getElementById("input_digits").innerHTML = "1";
      calc.inputDigits = 1;
  }

document.getElementById("input_digits").innerHTML = 1;

document.getElementById("btn_calculate").onclick = function() {
  alert(calc.inputDigits);
}
*/


/*
var btn_encrypt = document.getElementById("btn_encrypt"); //получить элемент по id
var btn_decrypt = document.getElementById("btn_decrypt"); // 

var input_message = document.getElementById("input_message").value;
var input_key = document.getElementById("input_key").value;					
document.getElementById('outputCode').innerHTML = "<p>Your CODE:</p>" + encryption;			
document.getElementById("btn_encrypt").onclick = encryptMessage;
*/
