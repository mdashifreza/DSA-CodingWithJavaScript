var twoSum = function(arr, start, target) {
    let len = arr.length;
    let left = start, right = len - 1;
    let ans = [];
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            ans.push([arr[start - 1], arr[left], arr[right]]);
            left++;
            right--;
            while (left < right && arr[left] === arr[left - 1]) left++;
            while (right > start && arr[right] === arr[right + 1]) right--;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}
var threeSum = function(arr, target) {
    arr.sort((a, b) => a - b);
    let len = arr.length;
    let ans = [];
    for (let i = 0; i < len - 2; i++) {
        // skip duplicates for the first element
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        let pairs = twoSum(arr, i + 1, target - arr[i]);
        for (let j = 0; j < pairs.length; j++) {
            ans.push(pairs[j]);
        }
    }
    return ans;
}
let result = threeSum([2,2,2,3,3,3,17,17,17,18,18,18], 37)
console.log(result);