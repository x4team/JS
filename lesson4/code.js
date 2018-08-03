// Функции https://www.youtube.com/watch?v=FZkSwa_rm_E

//Функция 1 (ДЕКЛАРИРОВАННАЯ ФУНКЦИЯ)- возвращает значение суммы (ФУНКЦИЯ ВСЕГДА ВОЗВРАЩАЕТ ЧТОЛИБО!)
function funcDec (a, b){       //Задаем функцию с названием func и передаем ей параметры a и b
    return a + b;           //Возвращаем значение суммы a и b
}

alert(funcDec(3,5)); //Встроенная функция alert возвращает значение из функции func


//Функция 2 - определения комфортной температуры для приготовления
function bake(degrees) {      //degrees - параметр для функции (может быть любое название)
        var message;

        if (degrees > 500) {
            message = "I'm not a nuclear reactor!";
        } else if (degrees < 100) {
            message = "I'm not a refrigerator!";
        } else {
            message = "That's a very comfortable temperature for me.";
            //setMode("bake");
            //setTemp(degrees);
        }
        return message;

}                      

var status = bake(350);  
alert(status);        
                                        
//Функция 3 - Выражение определения функции (ЛИТЕРАЛ ФУНКЦИИ) ПРИМЕНАЯЕТСЯ ВЕЗДЕ!!!!! Почти основная функция!

var  funcExp = function (a, b) {    //Сначала объявляем переменную, потом присваиваем ей ФУНКЦИЮ (в основном анонимную) 
     return a + b;
};  

console.log ( funcExp(2,3));

//Чем отличается FunctionDeclaration(объявление функции) от FunctionExpression(выражение функции)?  
//FunctionDeclaration имеет такое свойство как hosting (обработка вне очереди): 

function func1(){
    function funcExample() {
        return "one"
    }
    
    return funcExample(); //Вернется two, потому что действует хостиг. Объяснение: Сначала выполняется первая функция с,
                          //потом выполняется ВТОРАЯ функция funcExample(), а не возврат return funcExample()!!!! Это надо понимать.
    function funcExample() { //И получается вторая перезаписывает первую, и только после этого происходит ВЫЗОВ.
        return "two"
    }

};    

console.log(func1());  //Вызовется именно two! Это и есть хостиг, т.е. когда определение функции, написанно даже
                       //после ее вызова, определяется раньше чем вызов!!!
                       //В данном случае первым было возвращение one, но сразу оно не вернулось, пока функция не 
                       //выполнилась полностью, и сразу после one программа увидел two и перезаписала значение.


//Второй пример, но уже с FunctionExpression. Здесь уже хостига нет! Потому что 


function func2(){
        var funcExample2 = function () {
        return "one"
    }
    
    return funcExample2();

        var funcExample2 = function () {
        return "two"
    }

};    

console.log(func2()); 


//Функция-4 обратного вызова CallBack. Это когда надо выждать ответа от сервера (событие), и только после этого выполнить функцию, т.е.
//дождаться его ответа.

var func = function(callback) { //Эта функция В ОЖИДАНИИ callback (обратный вызов)
    var name = "Nick";     //После выполнения события, функция коллбэк инициализирует переменную name со строкой "Nick"
    return callback(name);  //И вернет результат "Nick"
}

func(function(n){   //Вызываем функцию func и в нее передаем в качестве аргумента функцию колбэк. n - это ожидаем параметр
    return "Hello " + n;   // И этот параметр будет передан здесь
});

console.log (  );


//возвращение функции
var func1 = function () {   
    return function() {
        console.log ( "Привет" );
    };
};

console.log ( func1() ); //выйдет "return function() { console.log ( "Привет" );"



//Анонимная самовызывающая функция (основа JS программирования)
;(function() {  // ; в начале функции обезопасит нас от предыдущего незакрытого кода
    console.log("Привет от анонимной самовызывающейся функции")
})(); //Получается мы ее определили и сразу же вызвали!


//Массив "arguments" (объект, позиционирующийся как массив, т.к. не имеет всех методов массивов, но имеет свойство lenght)

var funcArgs = function () { //Тем самым мы можем делать функции принимающие неограниченное кол-во параметров
    var i,
        sum = 0;
    for (i = 0; i < arguments.lenght; i++) {
            sum+=arguments[i];
        }    
        
    return sum;
};

console.log ( funcArgs(1, 2, 3, 3245, 234, 2342) ); //Считает сумму неограниченного количества аргументов

//Область видимости функций

function some() {
    var a = 5;
    alert(a); //5
}

some(); //5
alert(a); //undefined, ПОТОМУЧТО переменная "a" видна ТОЛЬКО внутри функции some! Тоесть ЛОКАЛЬНАЯ переменная

//Но можно объявить без var, тоесть "a = 5;" и получится ГЛОБАЛЬНАЯ переменная. Это очень плохо, потому что она может
//быть перезатерта, или будут пересечения. ПОЭТОМУ ВЕЗДЕ ИСПОЛЬЗУЕМ "var"!
















































































































