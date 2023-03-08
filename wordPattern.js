var wordPattern = function(pattern,s){
    const hashmapPattern ={};
    let chPattern = pattern.split('');
    let word = s.split(' ');
    const hashmapS={};
    for(let i=0; i<chPattern.length ;i++)
    {
        let chP = chPattern[i];
        let chS = word[i];
        if(!hashmapPattern[chP])
        {
            hashmapPattern[chP]=chS;
        }
        if(!hashmapS[chS])
        {
            hashmapS[chS]=chP;
        }
        if(hashmapPattern[chP] != chS || hashmapS[chS] !=chP)
        {
            return false;
        }
    }
    return true;
}
console.log(wordPattern('abba','dog cat cat fish'))