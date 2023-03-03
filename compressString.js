var compressString = function (str) {
    let ans = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== str.charAt(i + 1))
        {
            ans = ans + str.charAt(i);
            count = 1;
        }
        else
        {
            count++;
        }
    }
    console.log(count);
    return ans;
}
console.log(compressString('abbbcde'));
