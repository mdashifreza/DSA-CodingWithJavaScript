var validPallinString = function(str){
    let left = 0, end = str.length-1;
    while(str[left] != str[end])
    {
        return false;
    }
    return str;
}
console.log(validPallinString('abba'))