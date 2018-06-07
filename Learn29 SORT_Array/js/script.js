function init () {     
 	
 	function mergeSort(array) {
 		let oddarr = [];
 		let evenarr = [];
 		for (var i = 0; i < array.length; i++) {
 			if (array[i]%2==0) {
 				evenarr.push(array[i])
 			} else {
 				oddarr.push(array[i])
 			}
 		}

 		//array = oddarr.concat(evenarr);
 		return array;
 	}
    var array = [24,3,4,5,2,31,4,6,51,34,45,34,5,55,33,77,88,55,65,43,89,76,88,44,32,11];
    console.log(mergeSort(array));

}
window.onload = init; 


