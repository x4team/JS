function init () {     
/* Первое задание: Получить номер телефона в виде 123-4567 и написать
   код, который будет принимать или отвергать его. Чтобы телефон 
   был принят, он должен состоять из семи цифр 0-9, разделенных дефисом. */


//Код с использованием методов строк
function validate(phoneNumber) {
	
	if (phoneNumber.length !== 8) { //Узнаем сколько символов содержит строка. Если СТРОГО не равно 8, то возвращаем false
		console.log("Verification " + phoneNumber + " NOT passed!");
		return false;
	}
	for (var i = 0; i < phoneNumber.length; i++) {
		if (i === 3) {
			if(phoneNumber.charAt(i) !== '-') { //Проверяем каждый символ строки. Сначала убеждаемся, что  символ с индексом 3 СОДЕРЖИТ ДЕФИС
				console.log("Verification " + phoneNumber + " NOT passed!");
				return false;
			}
		} else if (isNaN(phoneNumber.charAt(i))) { //А затем проверяем, что каждый символ с индексами 0-2 и 4-6 содержит цифру
			console.log("Verification " + phoneNumber + " NOT passed!");
			return false;
		}
	}
    console.log("Verification " + phoneNumber + " passed!");
	return true;
} 
//var phone = "123-4567w";  
//validate(phone);



//Другой вариант: код с проверкой двух чисел и дефиса:
function validate2(phoneNumber) {
	if(phoneNumber.length !== 8) { //Также как в первом варианте (см.выше)
		console.log("Verification " + phoneNumber + " NOT passed!");
		return false;
	}
	var first = phoneNumber.substring(0,3); //метод substring создает строку, содержащую символы с НУЛЕВОГО по 3
	var second = phoneNumber.substring(4); // ..., содержащую символ с индексом 4 и ДО КОНЦА строки
	//Одно условие проверки
	//Проверяет если НЕ число, то возвращает false (Сначала isNaN проверяет на НЕ числа и возвращает true, что НЕ число)
	if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) { 
		console.log("Verification " + phoneNumber + " NOT passed!");
		return false;
	}
	console.log("Verification " + phoneNumber + " passed!");
	return true;
}

var phone = "023-4567";  
validate2(phone);


/* Второе задание(немного измененное - см.капсом): Получить номер телефона в виде 123-4567 и написать
   код, который будет принимать или отвергать его. Чтобы телефон 
   был принят, он должен состоять из семи цифр 0-9, которые МОГУТ разделяться дефисом. */

   


}
window.onload = init; 

