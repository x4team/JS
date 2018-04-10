// Функции
function bark(name, weight) {               //Функция начинается с ключевого слова function
   if (weight > 20) {                       //Далее следует имя функции
    console.log(name + " says WOOF WOOF");  //В скобках используются 2 значения, которые должны передаваться функции
   } else {                                 //В фигурных скобках - тело функции
    console.log(name + " says woof woof"); 
   }     
}   

bark("Bobik", 19);                                    
                                        
                                        