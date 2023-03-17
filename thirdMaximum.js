//nlogn
var thirdMaximum_1 =  function(nums){
    const setOfnums = new Set(nums);
    const newNums = [...setOfnums];
    newNums.sort((a,b)=>b-a); //3,2,1
    let firstMax = -Infinity;
    let thirdMax = 2; //2
    firstMax = Math.max(firstMax,...newNums);
    let len = newNums.length; //3
    if(len === 2){
        return firstMax;
    }
    for(let i=0; i<len; i++){// i = 0,1,2
        if(i === thirdMax){ 
            return newNums[thirdMax]; 
        }
    }
}
console.log(thirdMaximum_1([1,2,3,1,2,3,3]));
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