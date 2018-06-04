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
			if(phoneNumber.charAt(i) !== '-') { //Проверяем каждый символ строки. Сначала убеждаемся, что  символ с индексом 3 НЕ СОДЕРЖИТ ДЕФИС
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

//var phone = "023-4567";  
//validate2(phone);


/* Второе задание(немного измененное - см.капсом): Получить номер телефона в виде 123-4567 и написать
   код, который будет принимать или отвергать его. Чтобы телефон 
   был принят, он должен состоять из семи цифр 0-9, которые МОГУТ разделяться дефисом. */

//Код с использованием методов строк
function validate3(phoneNumber) {
	
	if (phoneNumber.length > 8 || phoneNumber.length < 7) { //Узнаем сколько символов содержит строка. Если БОЛЬШЕ 8 или МЕНЬШЕ 7 - возврат false
		console.log("Verification " + phoneNumber + " NOT passed!");
		return false;
	}
	for (var i = 0; i < phoneNumber.length; i++) {
		if (i === 3) {
			if(phoneNumber.length === 8 && phoneNumber.charAt(i) !== '-') { //Проверяем каждый символ строки. Убеждаемся, что длина строки 8 символов и с индексом 3 НЕ СОДЕРЖИТ ДЕФИС
				console.log("Verification " + phoneNumber + " NOT passed!");
				return false;
			}
		} else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) { //Также проверяем чтобы длина была 7 символов А затем проверяем, что каждый символ с индексами 0-2 и 4-6 содержит цифру
			console.log("Verification " + phoneNumber + " NOT passed!");
			return false;
		}
	}
    console.log("Verification " + phoneNumber + " passed!");
	return true;
} 
//var phone = "123-4567w";  
//validate3(phone);

//Другой вариант: код с проверкой двух чисел и дефиса:
function validate4(phoneNumber) {
	if(phoneNumber.length > 8 || phoneNumber.length < 7) { //Также как в первом варианте (см.выше)
		console.log("Verification " + phoneNumber + " NOT passed!");
		return false;
	}
	var first = phoneNumber.substring(0,3); //метод substring создает строку, содержащую символы с НУЛЕВОГО по 3
	var second = phoneNumber.substring(phoneNumber.length - 4); // Получаем вторую часть, определяя начальную позицию по общей длине номера.
	//Одно условие проверки
	//Проверяет если НЕ число, то возвращает false (Сначала isNaN проверяет на НЕ числа и возвращает true, что НЕ число)
	if (isNaN(first) || isNaN(second)){
		console.log("Verification " + phoneNumber + " NOT passed!");
		return false;
	}
	if (phoneNumber.length === 8) {    
		return (phoneNumber.charAt(3) === "-"); //ОПРЕДЕЛИТЬ КАК РАБОТАЕТ ВОЗВРАТ, НАЙТИ ОШИБКУ И ПЕРЕПИСАТЬ С МЕТОДОМ SPLIT
	}
	console.log("Verification " + phoneNumber + " passed!");
	return true;
}

//var phone = "023-4567";  
//validate4(phone);

function validate5(phoneNumber) {
	    
		return phoneNumber.match(/^\d{3}-?\d{4}$/);
	}

var phone = "023-4567";  
validate5(phone);

}
window.onload = init; 


