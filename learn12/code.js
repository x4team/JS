var message = prompt("Please enter message for encryption: \n *The text should be simple. A space is denoted by a semicolon  ; ");

var encryption = [];

var temp_symbol = 0;

for (var i = 0; i < message.length; i++)

   {

//Шифруем сообщения

    temp_symbol = message[i].charCodeAt(0) * 234;

    //Добавляем зашифрованный символ в массив encryption

    encryption[i] = temp_symbol;

    temp_symbol = 0;

   }

document.write(encryption);

var messageOriginal=[];
messageOriginal=encryption;
var deencryption=[];
for (var i = 0; i < messageOriginal.length; i++)

   {

//Дешифруем сообщения

    temp_symbol = String.fromCharCode(messageOriginal[i] / 234);
    
    //Добавляем расшифрованный символ в массив deencryption
deencryption[i] = temp_symbol;

   }
   var str = deencryption.join('');

document.write("<br/>" + str);



