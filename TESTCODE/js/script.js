function init () {

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


