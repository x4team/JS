

function say(text, n) {
	text = prompt("Введите что сказать: ");
	n = prompt("Введите сколько раз: ");
	for (var i = n; i > 0; i--) {
		alert(text);
	}
    

}

say();

function say2(text, n) {
	for (var i = n; i > 0; i--) {
		alert(text);
	}
 }
 say2 ("privet", 2);

