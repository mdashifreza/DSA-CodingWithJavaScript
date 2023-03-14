const majorityElement = function(nums){
    const freq ={};
    let len = Math.floor((nums.length-1))/2
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        if(freq[num]){
            freq[num]++;
        }
        else{
            freq[num]=1;
        }
    }
    for(let i in freq){
        if(freq[i] > len){
            return i;
        }
    }
};
console.log(majorityElement([2,2,1,1,1,2,2]));