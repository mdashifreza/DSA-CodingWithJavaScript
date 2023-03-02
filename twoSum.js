//worst complexity O(n^2)
function twoSum1(arr, target) {
    let len = arr.length, i = 0, j = 0;
    for (i = 0; i < len - 1; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
    return [-1, -1];
}
let result1 = twoSum1([0, 1, 2, 4, 6, 3], 5)
console.log(result1);
console.log("----------------------2--------------------");
//O(n) complexity using hashmap
function twoSum(arr, target) {
    let len = arr.length, i = 0;
    hashmap = {};
    for (i = 0; i < len; i++) {
        if (hashmap[target - arr[i]] !== undefined) {
            return [hashmap[target - arr[i]], i];
        }
        hashmap[arr[i]] = i;
    }
}
let result = twoSum([0, 1, 2, 4, 6, 3], 5)
console.log(result);
console.log("------------------3-----------------------");
//O(n) cpmplexity without without haspmap print unique pair
function twoSum2(arr, target) {
    let len = arr.length;
    let left = 0, right = len - 1;
    while (left < right) {
        if (arr[left] + arr[right] == target) {
            return [left, right];
        }
        else
            if (arr[left] + arr[right] < target) {
                left++;
            }
            else {
                right--;
            }
    }
    return [-1, -1];
}
let result2 = twoSum2([0, 1, 2, 4, 6, 3], 5)
console.log(result2);
console.log("--------------------4------------------------");
// print all possible pair without hashmap
function twoSum3(arr, target) {
    arr.sort((a, b) => a - b);
    let len = arr.length;
    let left = 0, right = len - 1, sum = 0;
    let ans = [];
        while (left < right) {
            sum = arr[left] + arr[right];
            if (sum === target)
            {
                ans.push([arr[left], arr[right]]);
                left++;
                right--;
            } else 
            if (sum < target)
            {
                left++;
            } else
            {
                right--;
            }
        }
    return ans;
}
let result3 = twoSum3([0, 1, 2, 4, 6, 3], 5)
console.log(result3);
console.log("--------------------5------------------------");
// print unique pair using two pointer 
function twoSum4(arr, target) {
    arr.sort((a,b)=>a-b);
    let len = arr.length;
    let left = 0, right = len - 1;
    let ans = [];
        while (left < right) {
            let sum = arr[left] + arr[right];
            while(left < right && arr[left] === arr[left+1]){left++};
            while(right > left && arr[right] === arr[right-1]){right--};
            if (sum === target)
            {      
                ans.push([arr[left], arr[right]]);
                left++;
                right--; 
            } else 
            if (sum < target)
            {
                left++;
            } else
            {
                right--;
            }
        }
    return ans;
}
let result4 = twoSum4([2,2,2,3,3,3,17,17,17,18,18,18], 20)
console.log(result4);