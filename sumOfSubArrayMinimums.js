//O(n^2)
var sumOfSubArrayMinimums_1 = function(nums){
    let allSubArray = [];
    let min = 0, minSum = 0;
    for(let i=0; i<nums.length; i++){
        min = Infinity;
        for(let j=i; j<nums.length; j++){
            allSubArray.push(nums.slice(i,j+1));
            min = Math.min(min,...nums.slice(i,j+1));
            minSum += min;
        }
    }
return minSum;
}
console.log(sumOfSubArrayMinimums_1([3,1,2,4]));
