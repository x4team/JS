function init () {     

var test1 = "abcdef"; //string
var test2 = 123; //number
var test3 = true; //boolean
var test4 = {}; //object
var test5 = []; //object
var test6; //undefined
var test7 = {"abcdef": 123}; //object
var test8 = ["abcdef", 123]; //object
function test9(){ return "abcdef"}; //function
var test10 = null; //object
var test11 = 0/0; //number
var test12 = Infinity-Infinity; //NaN - невозможно понять)) *Но почемуто у меня number

document.write((typeof test1) + "</br>"); //string
document.write((typeof test2) + "</br>"); //number
document.write((typeof test3) + "</br>"); //boolean
document.write((typeof test4) + "</br>"); //object
document.write((typeof test5) + "</br>"); //object
document.write((typeof test6) + "</br>"); //undefined
document.write((typeof test7) + "</br>"); //object
document.write((typeof test8) + "</br>"); //object
document.write((typeof test9) + "</br>"); //function
document.write((typeof test10) + "</br>"); //object
document.write((typeof test11) + "</br>"); //number
document.write((typeof test12) + "</br>"); //number
if (99 == "99") {document.write("true" + "</br>");}; //РАВНО
document.write((2 + "1 1") + "</br>"); //number

}


window.onload = init; 


