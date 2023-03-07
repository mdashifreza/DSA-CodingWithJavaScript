var isomorphicString = function(s,t){
    const hashmapST = {};
    const hashmapTS = {};
    if(s.length != t.length)
    {
        return ;
    }
    for(let i=0; i<s.length; i++)
    {
        let chS = s[i];
        let chT = t[i];
        if(!hashmapST[chS])
        {
            hashmapST[chS] = chT;
        } 
        if(!hashmapTS[chT])
        {
            hashmapTS[chT] = chS;
        }
        if(hashmapST[chS] !== chT || hashmapTS[chT] !== chS)
        {
            return false;
        }
    }
    return true;
}
console.log(isomorphicString('foo','adj'));