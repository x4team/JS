function init () {     

//--------------------------------------------------
var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
var presentableText = text.toLowerCase();
if (presentableText.length > 0) {
	alert(presentableText);
}

//--------------------------------------------------
var name = "Jenny";
var phone = "867-5309";
var fact = "This is a prime number";

var songName = phone + "/" + name;

var index = phone.indexOf("-");
if(fact.substring(10,15)==="prime") {
	alert(fact);
}

}
window.onload = init; 


