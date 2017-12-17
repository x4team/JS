
	var t = setInterval(move,10);
	//starting position
	var pos = 0;
	//out box element
	var box = document.getElementById("box");


    
	
	function move() {
		if (pos >= 150) {
			clearInterval(t); }
			else {
			pos++;
			box.style.left = pos+"px"; //px=pixels
   
				}

			

		}
	
	