function greatEngLetter(str) {
    let upperArr = new Array(26).fill(0);
    let lowerArr = new Array(26).fill(0);
    let ans = '';
    for (let i = 0; i < str.length; i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
        {
            lowerArr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
        } else
        {
            upperArr[str[i].charCodeAt(0) - 'A'.charCodeAt(0)] = 1;
        }
    }
    for (let i = 25; i >= 0; i--)
    {
        if (upperArr[i] && lowerArr[i])
        {
            let ch = String.fromCharCode(i + 'A'.charCodeAt(0));
            ans = ch;
            break;
        }
    }
    return ans;
}
console.log(greatEngLetter('asHhiIf'))