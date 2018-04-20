function clunk(times) {
	var num = times;
	while (num > 0) {
		display("clunk");
		num = num - 1;
	}
}

function thingamajig(size) {
	var facky = 1;
	clunkCounter = 0;
	if (size == 0) {
		display("clunk");
	} else if (size == 1) {
		display("thunk");
	} else {
		while (size > 1) {
			facky = facky * size;
			size = size -1;
		}
		clunk (facky);
	}
}

function display(output) {
	console.log (output);
	clunkCounter = clunkCounter +1;
}
var clunkCounter = 0;
thingamajig(4);
//console.log(clunkCounter);




var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
	cameraOn = false;
	if (amount < balance) {
		balance=balance - amount;
	}
	return amount;
	cameraOn = true;
}

var amount = steal(balance, 1250);
alert ("Criminal: you stole " + amount + "!");
alert (balance);
