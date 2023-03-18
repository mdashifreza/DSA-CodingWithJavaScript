//O(m+n) 
var mergeSort = function(a,b){
    let ai = 0 ,bi = 0;
    let ans = [];
    while(ai < a.length && bi < b.length){
        if(a[ai] <= b[bi]){
            ans.push(a[ai]);
            ai++;
        }
        else{
            ans.push(b[bi]);
            bi++;
        }
    }
    while(ai < a.length){
        ans.push(a[ai]);
        ai++;
    }
    while(bi < b.length){
        ans.push(b[bi]);
        bi++;
    }
return ans;
}
console.log(mergeSort([1,2,3,4],[5,6,7,8,9,10]))
//in O(nlogn)// sort single array of unsorted element;
var merSort_recursive = function(arr){
    
}