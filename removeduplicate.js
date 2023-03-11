var removeduplicate = function(str){
    let final = "";
    for(let i=0; i < str.length; i++){
        let bool = false;
        for(let j=i+1; j < str.length; j++){
            if(str[i] === str[j])
            {
                bool=true;
                break;
            }
        }
        if(!bool){
        final=final+str[i];
        }
    }
return final;
}
console.log(removeduplicate('bcabc'))