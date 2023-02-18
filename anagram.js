function anagram(str1,str2){
    let len1 = str1.length;
    let len2 = str2.length;
    if(len1 != len2)
    {
        return false;
    }
    let res1 = str1.split('').sort().join('');
    let res2 = str2.split('').sort().join('');
    if(res1 != res2)
    {
        return false;
    }
    else
    {
        return true;
    }
}
let ou = anagram("ashif","fiash");
console.log(ou);