/* function init () {

function longest(s1, s2) {
  //Split the strings into an array character
  let str=s1+s2;
  let arr=str.split('');
  
  //Create and fill the alphabet array with letters
  let arrABC=[];
  for (i=97; i<=122; i++){
    let strTemp = String.fromCharCode(i);;
    arrABC.push(strTemp);
    }
    
  //Finding the same values in arrays
  var array3 = arrABC.filter(function(obj) { return arr.indexOf(obj) >= 0; });

  var str_complete = array3.join('');
  return str_complete;
    

}

longest("aretheyhere", "yestheyarehere");

}
window.onload = init; 
*/


/*****************************/
/*Передача функции в функцию */
/*****************************/
/*function sayIt(translator) {
  var phrase = translator("Goodbye");
  alert(phrase);
}*/

/**********************************************/
/*В зависимости от phrase будет разный "алерт"*/
/**********************************************/
/*function hawaiianTranslator(word) {
  if (word === "Hello") return "Aloha";
  if (word === "Goodbye") return "Aloha, too";
}

sayIt(hawaiianTranslator);
*/


// function  fun(echo) {
//   console.log(echo);
// }

// fun("hello");

// function  boo(aFunction) {
//   aFunction("boo");
// }

// boo(fun);

// console.log(fun);

// fun(boo);

// var moreFun = fun;

// moreFun("hello again");



// function echoMaker() {
//   return fun;
// }

// var bigFun = echoMaker();
// bigFun("Is there an echo?");
// }

// (function(food) {
//   if (food === "coockies") {
//     alert("More please");
//   } else if (food === "cake") {
//     alert("Yum yum");
//   }
// })("coockies");

// const sequenceSum = (begin, end) => {
//   // BEGIN (write your solution here)
//   if(begin === end) {
//     return begin;
//   } else if (begin > end) {
//     return NaN;
//   } else {
//     return begin + sequenceSum(begin + 1, end);
//   }
//   // END
// };

// sequenceSum(1,5);

// const isPrime = (n) => {
//   if (n <= 1) {
//     return false;
//   }
//   for (let counter = 2; counter < n; counter++) {
//     if (n % counter === 0) {
//       return false;
//     } 
//   }
//   return true;
// };

// console.log(isPrime(17));
// const square = (num) => num * num;

// const getTriangleArea = (h, b) => 0.5*h*b;

// const getnArea=(n)=>{
//   return getTriangleArea(n,square(n)/2);
// };

// console.log(getTriangleArea(5,10));
// console.log(getnArea(10));



// const  square = (x) => {
//   return x * x;
// };
// const sumOfSquares = (x,y) => {
//   return square(x) + square(y);
// };
// const squareSumOfSquares = (x, y) => {
//   return square(sumOfSquares(x, y));
// };

// console.log(square(3));
// console.log(sumOfSquares(3,3));
// console.log(squareSumOfSquares(3,3));



// const x = 7;
// const f = (x) => () => () => x;
// console.log(f(10)()());



// const addDigits = (num) => {
//   let acc = 0;
//   let str = String(num);
//   for (let counter = 0; counter < String(num).length; counter++) {
       
//       if (str.length >= 2) {
//         acc = acc + Number(String(num)[counter]);
//       } else {
//         return Number(str[0]);
//       }  

//     }
//      return acc; 
// };


// console.log(addDigits(38));



// const factorial = (n) => {
//   const iter = (counter, acc) => {
//     if (counter === 1) {
//       return acc;
//     }
//     return iter(counter-1, counter * acc);
//   }
//   return iter(n,1);
// }



// const SumDigits = (str) => {
//   if (str.length <= 1) {
//     return Number(str);
//   } else if (str.length >= 2) {
//     let acc = 0;
//     for(let counter=0; counter<str.length; counter++) {
//       acc = acc + Number(str[counter]);
//     }
//       str = String(acc);
//       return SumDigits(str);
//   } 
// };

// console.log(SumDigits(String(1259)));


// const addDigits = (num) => {
//   let str = String(num);
//   if (str.length <= 1) {
//     return num;
//   } else if (str.length >= 2) {
//     let acc = 0;
//     for(let counter=0; counter<str.length; counter++) {
//       acc = acc + Number(str[counter]);
//     }
//       num = acc;
//       return addDigits(num);
//   } 
// };

// console.log(addDigits(999999999999));


// const dnaToRna = (str) => {
//   let arr = str.split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (str==="") {
//       return "";
//     } else if (arr[i]==="G") {
//       arr[i] = 'C';
//      } else if (arr[i]==="C") {
//       arr[i] = 'G';
//      } else if (arr[i]==="T") {
//       arr[i] = 'A';
//      } else if (arr[i]==="A") {
//       arr[i] = 'U';
//      } else {
//       return null;
//      }
     
//   }
//   return arr.join("");
// };


// console.log(dnaToRna("ACGTGGTCTTAA")); // 'UGCACCAGAAUU'
// console.log(dnaToRna("CCGTA")); // 'GGCAU'
// console.log(dnaToRna(""));  // ''
// console.log(dnaToRna("ACNTG")); // null

function isBalanced(str) {
    // пары открывающих-закрывающих скобок
    var br = "()";
    // стек открытых скобок
    var st = [];
    // бежим по всей строке
    for (var i = 0; i < str.length; ++i) {
        // текущий символ
        var ch = str[i];
        // ищем символ в скобках
        var ind = br.indexOf(ch);
        // если скобка найдена
        if (ind >= 0) {
            // проверяем, какая это скобка
            if (ind & 1) {
                // если закрывающая скобка, проверяем стек
                // стек пуст - плохо
                if (!st.length) return false;
                // извлекаем последнюю открытую скобку из стека
                var last_br = st.pop();
                // если она не соответствует закрывающей скобке - тоже плохо
                if (last_br != br[ind - 1]) return false;
            } else { 
                // открывающую скобку просто пихаем в стек
                st.push(ch);
            }
        }
    }
    // если после обхода всей строки стек пуст - всё ок
    return !st.length;
}