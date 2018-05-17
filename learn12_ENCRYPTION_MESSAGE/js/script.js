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

var btn_encrypt = document.getElementById("btn_encrypt"); //получить элемент можно поселектору
var btn_decrypt = document.getElementById("btn_decrypt"); // или можно по id
var key_crypt = [];
var message = [];
var outputCode =[];
var encryption = [];



//Функция проверяет данные пользователя и выводит сообщение если он вводит не по шаблону

function encryptMessage(){
   var input_message = document.getElementById("input_message").value;
   var input_key = document.getElementById("input_key").value;
   alertDiscrepancy(input_key);

   if (alertDiscrepancy(input_key)==true) { 
   						key_crypt = input_key;
   						message = input_message;
  						//Выполнение основного кода
  									//Алгоритм ключа шифрования
									var key_encrypt = [];
									key_encrypt = input_key;
									var key_encrypt_method = (key_encrypt[0].charCodeAt(0) + key_encrypt[1].charCodeAt(0) + key_encrypt[2].charCodeAt(0) + key_encrypt[3].charCodeAt(0)) * key_encrypt[4].charCodeAt(0) + (key_encrypt[5].charCodeAt(0) * key_encrypt[6].charCodeAt(0) * key_encrypt[7].charCodeAt(0));
									//Цикл шифрования
									for (var i = 0; i < message.length; i++)

   									{

   										var temp_symbol = message[i].charCodeAt(0) * key_encrypt_method; //Алгоритм шифрования сообщения

    									//Добавляем зашифрованный символ в массив encryption

    									encryption[i] = temp_symbol;

    									temp_symbol = 0;

   									}
   									
							
  	document.getElementById('outputCode').innerHTML = "<p>Your CODE:</p>" + encryption;			
  		} 
   }


document.getElementById("btn_encrypt").onclick = encryptMessage;
//Конец функции шифрования


//Дешифрование
function decryptMessage(){
   var input_message = document.getElementById("input_message").value;
   var input_key = document.getElementById("input_key").value;
   alertDiscrepancy(input_key);

   if (alertDiscrepancy(input_key)==true) { 
   						key_crypt = input_key;
   						message = input_message;
  						//Выполнение основного кода

  							//Дешифруем
							var messageOriginal=[];
							messageOriginal=input_message.split(',');					
							var deencryption=[];

										
								for (var i = 0; i < messageOriginal.length; i++) {
								
								//Дешифруем сообщение
								var key_encrypt = [];
								key_encrypt = input_key;
								var key_encrypt_method = (key_encrypt[0].charCodeAt(0) + key_encrypt[1].charCodeAt(0) + key_encrypt[2].charCodeAt(0) + key_encrypt[3].charCodeAt(0)) * key_encrypt[4].charCodeAt(0) + (key_encrypt[5].charCodeAt(0) * key_encrypt[6].charCodeAt(0) * key_encrypt[7].charCodeAt(0));
												
    							var temp_symbol = String.fromCharCode(messageOriginal[i] / key_encrypt_method);
    
    							//Добавляем расшифрованный символ в массив deencryption
								deencryption[i] = temp_symbol;							
   								}
   								var str = deencryption.join('');
   							document.getElementById('outputCode').innerHTML = "<p>Your MESSAGE:</p>" + str;

  							} 
   
   }
document.getElementById("btn_decrypt").onclick = decryptMessage;




//Выводим сообщение, если значение ключа меньше 8 символов, или больше 8
function alertDiscrepancy(key) {
	if (key.length < 8 || key.length > 8) {
				//document.getElementById('alertKeyMessage').innerHTML = "<p>Please enter KEY encryption strictly ONLY 8 characters!</p>"; 
				$('#alertKeyMessage').show(1000, function(){
  					setTimeout(function(){
    					$('#alertKeyMessage').hide(500);
  					}, 3000);
				});
				return false;
				} else return true;
				 
}



/*
//Если условие выполнено - запоминаем
var key_encrypt=key_encrypt_input; 

var encryption = [];

var temp_symbol = 0;

//Алгоритм ключа шифрования

var key_encrypt_method = (key_encrypt[0].charCodeAt(0) + key_encrypt[1].charCodeAt(0) + key_encrypt[2].charCodeAt(0) + key_encrypt[3].charCodeAt(0)) * key_encrypt[4].charCodeAt(0) + (key_encrypt[5].charCodeAt(0) * key_encrypt[6].charCodeAt(0) * key_encrypt[7].charCodeAt(0));


//Цикл шифрования
for (var i = 0; i < message.length; i++)

   {

   temp_symbol = message[i].charCodeAt(0) * key_encrypt_method; //Алгоритм шифрования сообщения

    //Добавляем зашифрованный символ в массив encryption

    encryption[i] = temp_symbol;

    temp_symbol = 0;

   }

document.write(encryption);


//Дешифруем
var messageOriginal=[];
messageOriginal=encryption;
var deencryption=[];
for (var i = 0; i < messageOriginal.length; i++)

   {

//Дешифруем сообщения

    temp_symbol = String.fromCharCode(messageOriginal[i] / key_encrypt_method);
    
    //Добавляем расшифрованный символ в массив deencryption
deencryption[i] = temp_symbol;

   }
   var str = deencryption.join('');

document.write("<br/>" + str); */