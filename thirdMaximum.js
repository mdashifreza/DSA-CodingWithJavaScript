
// [1,2,3,1,2,3,4,5,6,7,6,5]
//O(n)
var thirdMaximum_2 = function(nums){
    const setOfNums = new Set(nums);
    const firstMax = Math.max(...setOfNums);
    if(setOfNums.size < 3){
        return firstMax;
    }
    setOfNums.delete(firstMax);
    const secondMax = Math.max(...setOfNums);
    setOfNums.delete(secondMax);
    const thirdMax = Math.max(...setOfNums);

return thirdMax;
}
console.log(thirdMaximum_2([1,1,2,3,4,5,6,1,2]));