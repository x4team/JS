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
//Поправить код, чтобы при смене метода был нормальный проссчет


var calc = {
  inputDigits: 0,
  addition: 0,
  subtraction: 0,
  multiplication: 0,
  calculate: 0,
  logAction: ['start'],
  flagNotEmptyValue: false,

  btnDigitsClick: function (el) {
    if(this.flagNotEmptyValue){
    document.getElementById('input_digits').value = '';
    }
  document.getElementById('input_digits').value += el.value;
  this.inputDigits = document.getElementById('input_digits').value;
  this.flagNotEmptyValue = false;
  },

  btnCommaClick: function (el) {
  document.getElementById('input_digits').value += el.value;
  this.inputDigits = document.getElementById('input_digits').value;
  //После первого нажатия точки - деактивируем кнопку на повторный ввод
  document.getElementById("btn_comma").disabled=true;
  },

  btnAdditionClick: function () {
  // 1)Сразу активируем запятую
  document.getElementById("btn_comma").disabled=false;
  // 2)Получаем в свойство addition объекта calc значение поля ввода value
  this.addition = parseFloat(document.getElementById('input_digits').value);
  this.calculate = this.calculate + this.addition;
  //Возвращаем значение
  document.getElementById('input_digits').value = this.calculate;
  this.flagNotEmptyValue = true;
  //Обнуляем переменную "сложения"
  this.addition = 0;
  //Добавляем в логи действие "+" в конец массива logAction (так мы будем знать что нажал пользователь последним)
  this.logAction.push('+'); 
  },

  btnSubtractionClick: function () {
  // 1)Сразу активируем запятую
  document.getElementById("btn_comma").disabled=false;
  // 2)Получаем в свойство addition объекта calc значение поля ввода value
  this.subtraction = parseFloat(document.getElementById('input_digits').value);
  this.calculate = this.calculate + this.subtraction;
  //Возвращаем переменную calculate
  document.getElementById('input_digits').value = this.calculate;
  this.flagNotEmptyValue = true;
  //Обнуляем переменную "вычитание"
  this.subtraction = 0;
  //Добавляем в логи действие вычитание "-" в конец массива logAction
  this.logAction.push('-'); 
  },

  btnMultiplicationClick: function () {
  // 1)Сразу активируем запятую
  document.getElementById("btn_comma").disabled=false;
  // 2)Получаем в свойство multiplication объекта calc значение поля ввода value
  this.multiplication = parseFloat(document.getElementById('input_digits').value);
  this.calculate = this.calculate * this.multiplication;
  //Возвращаем переменную calculate
  document.getElementById('input_digits').value = this.calculate;
  this.flagNotEmptyValue = true;
  //Обнуляем переменную "Умножение"
  this.multiplication = 0;
  //Добавляем в логи действие умножение "*" в конец массива logAction
  this.logAction.push('*'); 
  },

  btnCalculateClick: function () {
  let tempvalue = document.getElementById('input_digits').value;
  /* Перед вызовом calculate, проверяем последнее введенное значение value, и если оно НЕ пустое, 
     то выполняем предыдущее действие, записанное в массив logAction(сложение, вычитание, 
     деление, или умножение) */   
  if (tempvalue!='') {
     if (this.logAction[this.logAction.length - 1]=='+') {
    this.calculate = parseFloat(this.calculate) + parseFloat(tempvalue);
      } else if (this.logAction[this.logAction.length - 1]=='-') {
    this.calculate = parseFloat(this.calculate) - parseFloat(tempvalue);
      } else if (this.logAction[this.logAction.length - 1]=='*') {
    this.calculate = parseFloat(this.calculate) * parseFloat(tempvalue);
      }
    document.getElementById('input_digits').value = parseFloat(this.calculate);
    //Обнуляем переменные в конце
    this.calculate = 0;
    tempvalue = 0;
  }
  },

  btnAC: function () {
  //Обнуляем свойства в объектах
  this.calculate = 0;
  this.addition = 0;
  this.subtraction = 0;
  this.logAction = ['start'];
  this.temp = 0;
  this.multiplication = 0;
  document.getElementById('input_digits').value = ''; 
  //Возвращаем и активируем точку в значениях
  document.getElementById("btn_comma").disabled=false;
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
