//Time comple O(n^2);
function twoSum(arr,find){
    for(let i=0; i<arr.length-1; i++)
    {
        for(let j=0; j<arr.length; j++)
        {
            if(arr[i]+ arr[j] == find)
            {
                return [i,j];
            }
        }
    }
}
let result = twoSum([2,4,6,8,10],10);
console.log(result);
//Time comp O(n)
let arr = [2,4,6,8,10];
let target = 10;
let twoSumMap = function(arr,target){
    for(let i=0; i<arr.length; i++)
    {
        let num1 = arr[i];
        let num2 = target - num1;
        if(map.has(num2))
        {
            return [map.get(num2),i]
        }
        else
        {
            return map.set(num1,i);
        }
    }
}
let resu = twoSumMap(arr,target);
let map = new Map();
