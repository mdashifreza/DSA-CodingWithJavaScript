var quickSort = function(arr,l=0,r=arr.length-1){
    let pivot = arr[l];
    let swapIndex = l;
    while(l <= r){
        if(pivot > arr[l+1]){
            swapIndex++;
            [arr[l+1] ,arr[swapIndex]] = [arr[swapIndex], arr[l+1]];
        }
    l++;
    }
return swapIndex;
}
console.log(quickSort([3,4,1,2,5,6,7]));