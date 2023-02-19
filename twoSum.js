//Time comple O(n^2);
// function twoSum(arr,find){
//     for(let i=0; i<arr.length-1; i++)
//     {
//         for(let j=0; j<arr.length; j++)
//         {
//             if(arr[i]+ arr[j] == find)
//             {
//                 return [i,j];
//             }
//         }
//     }
// }
// let result = twoSum([2,4,6,8,10],10);
// console.log(result);
//Time comp O(n)
console.log('--------------------------')
let arr = [2,4,6,8,10];
let target = 12;
function twoSumMap(arr,target){
    let map = new Map();
    for(let i=0; i<arr.length; i++)
    {
        let valueArr = arr[i];
        let indexInMap = target - valueArr;
        // map.set(i,num1); i=> key and value => value 
        if(map.has(indexInMap))
        {
            return [i,map.get(indexInMap)];
        }
        else
        {
            map.set(i,valueArr);
        }
    }
    console.log(map)
}
let resu = twoSumMap(arr,target);
console.log(resu);
