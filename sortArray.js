//O(n) using merge sort application:
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
var BymergeSort = function(nums,si,ei){
    if(si === ei){
        let baseArray = [];
        baseArray.push(nums[si]);
        return baseArray;
    }

    let mid = Math.floor((si + ei) / 2);
    let firstHalfSortedArray = BymergeSort(nums, si, mid);
    let secondHalfSortedArray = BymergeSort(nums, mid + 1, ei);
    return mergeSort(firstHalfSortedArray,secondHalfSortedArray); 
}
var sortArray = function(nums) {
    return BymergeSort(nums,0, nums.length - 1);
};
console.log(sortArray([1,5,2,3,4]));