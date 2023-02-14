function revWordPlace(str){
    let len = str.length;
    let curW = 0, endW=0;
    let ansAfterSpace = '';
    let finalRev = '';
    for(let i=0; i<len; i++)
    {
        if(str.charAt(i) == ' ')
        {   
            let ansTillSpace = '';
            endW=i;
            for(let j=curW; j<endW; j++)
            {
                ansTillSpace= str.charAt(j)+ansTillSpace;
            }
            curW=i+1;
            finalRev+=ansTillSpace+' ';
        }
    }
    for(let k=curW; k<len; k++)
    {
        ansAfterSpace = str.charAt(k) + ansAfterSpace;
    }
    finalRev = finalRev + ansAfterSpace;
    console.log(finalRev);
}
revWordPlace("md ashif reza");
