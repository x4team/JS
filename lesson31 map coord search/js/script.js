window.onload = init; 

function init () {     
  var map = document.getElementById("map");
  map.onmousemove = showCoords;
}

function showCoords(eventObj) {
  var map = document.getElementById("coords");
  x = 200; y = 181;
  var coordX = eventObj.clientX;
  var coordY = eventObj.clientY;
  if (coordX == x && coordY == y) { 
    
    map.innerHTML = "Map coordinates: " + x + ", " + y;
  }
}





