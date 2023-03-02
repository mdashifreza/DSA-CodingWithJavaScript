function subArraySumK(arr, k) {
    let count = 0;
    let sum = 0;
    const hashmap = {};
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (sum === k)
        {
            count++;
        }
        if ((sum - k) in hashmap)
        {
            count += hashmap[sum - k];
        }

        if (!(sum in hashmap))
        {
            hashmap[sum] = 0;
        }
        hashmap[sum]++;
    }
    return count;
}
let result = subArraySumK([1,0,4],2);
console.log(result);