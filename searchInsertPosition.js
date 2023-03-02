//O(logn) time complexity using bs
var searchInsertPositionBS = function(arr,target){
    //arr = [1,2,3,4,5]
    let l=0,r = arr.length-1;
    let mid = 0;
    while( l<=r )
    {
        mid = Math.floor((l + r) / 2);
        if( target == arr[mid] )
        {
            return mid;
        }
        else
        if( target > arr[mid] )
        {
            l = mid + 1;
        }
        else
        {
            r = mid - 1;
        }
    }
    return l;
}                                 //0,1,2,3,4
console.log(searchInsertPositionBS([2,3,4,5,6],1));