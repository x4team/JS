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

(function(food) {
  if (food === "coockies") {
    alert("More please");
  } else if (food === "cake") {
    alert("Yum yum");
  }
})("coockies");
