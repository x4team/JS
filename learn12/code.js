var message = prompt("Please enter message for encryption: \n *The text should be simple. A space is denoted by a semicolon  ; ");


//Вводим ключ шифрования. Обязательно не менее и не более 8 символов.
var key_encrypt_input = prompt("Please enter KEY for encryption: \n *Strictly ONLY 8 characters ");
var key_encrypt = [];

//Проверяем если пользователь вводит не по шаблону
while (key_encrypt_input.length<8||key_encrypt_input.length>8) {
key_encrypt_input = prompt("Please enter KEY for encryption: \n *Strictly ONLY 8 characters "); 
}  

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

document.write("<br/>" + str);



