function init () {     
 	
 	function Merge(a,low,mid,high)    //Вспомогательная функция.
{
    var b = new Array(high+1-low), h, i, j = mid+1, k, h = low, i = 0;
    while (h <= mid && j <= high )
     { if (a[h] <= a[j]){ b[ i ]=a[h]; h++; }
       else             { b[ i ]=a[j]; j++; }
       i++;
     }
    if (h > mid){ for (k = j; k <= high; k++){ b[ i ]=a[k]; i++; } }
    else        { for (k = h; k <= mid; k++){  b[ i ]=a[k]; i++; } }    
    for (k=0; k<=high-low; k++) a[k+low]=b[k];
    return a;
}

function MergeSort(A)      //Функция сортировки слиянияем.
{
    function merge_sort(a,low,high)
     { if (low < high)
        { var mid = Math.floor((low+high)/2);
          merge_sort(a, low, mid);
          merge_sort(a, mid+1, high);
          Merge(a, low, mid, high);
        }
     }
    var n = A.length;
    merge_sort(A, 0, n-1);
    return A;
}
    var array = [24,3,4,5,2,31,4,6,51,34,45,34,5,55,33,77,88,55,65,43,89,76,88,44,32,11,234,2342,6,532,234,23,234,23,346,354,645,4,5];
    console.log(MergeSort(array));

}
window.onload = init; 


