var validAnagram = function(s,t){
    if(s.length !== t.length)
    {
        return false;
    }
    const hashmapS = {};
    const hashmapT = {};
    for(let i=0; i<s.length; i++)
    {
        let chS = s[i];
        let chT = t[i];
        if(hashmapS[chS])
        {
            hashmapS[chS]++;
        }
        else
        {
            hashmapS[chS]=1;
        }
        if(hashmapT[chT])
        {
            hashmapT[chT]++;
        }
        else
        {
            hashmapT[chT]=1;
        }
    }
    for(let track in hashmapS)
    {
        if(hashmapS[track] != hashmapT[track])
        {
            return false;
        }
    }
return true;
}
console.log(validAnagram('ashif','reza'));