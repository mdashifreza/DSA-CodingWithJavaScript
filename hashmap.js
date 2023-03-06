const str = 'abbccddeeff';
var hashmap = function(str){
const charCount = {};
for(let i=0; i<str.length; i++)
{
    let char = str[i];
    if(charCount[char])
    {
        charCount[char]++;
    }
    else
    {
        charCount[char] = 1
    }
}
return charCount;
}
console.log(hashmap(str))