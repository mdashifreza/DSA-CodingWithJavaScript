//q1 simple return the pair present
function twoSum(arr,target){
    const hashmap = {};
    let len = arr.length;
    for(let i=0; i<len; i++)
    {
        if( hashmap[target-arr[i]] !== undefined )
        {
            return [hashmap[target - arr[i]],i];
        }
        hashmap[arr[i]] = i;
    }
return [-1,-1];
}
let result = twoSum([0,1,2,4,6,3],5);
console.log(result);