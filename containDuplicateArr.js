//in O(n^2) 
var containDuplicateArr = function(nums,k){
    let len = nums.length;
    for( let i=0; i<len-1; i++)
    {
        for(let j=i+1; j<len; j++)
        {
            if(nums[i] === nums[j] && j-i <= k)
            {
                return true;
            }
        }
    }
    return false;
}
console.log(containDuplicateArr([1,2,3,1,2,3],2));console.log('--------------');
//in O(log(n))
var containDuplicateArr2 = function(nums,k){
    let hashMapSeen = {};
    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] in hashMapSeen && i - hashMapSeen[nums[i]] <= k) 
        {
            return true;
        }
        hashMapSeen[nums[i]] = i;
    }
return false;
}
console.log(containDuplicateArr2([1,2,3,1,2,3],2))