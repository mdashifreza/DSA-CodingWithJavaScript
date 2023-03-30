var boardPath = function(path){
    const hashMap = {};
    const str = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0; i<str.length; i++){
        let ch = str[i];
        if(!hashMap[ch]){
            hashMap[ch] = [Math.floor(i/5),i%5];
        }
    }
    let move = [];
    let [i,j] = [0,0];
    for(let ch of path){
        const [currI,currJ] = hashMap[ch];
        // console.log([currI,currJ])
        if(i === 5 && j=== 0 && ch !== 'z'){
            move.push('U');
            i--;
        }
        while(i !== currI){
            if(i < currI){
                move.push('D');
                i++;
            }else{
                move.push('U');
                i--;
            }
        }
        while(j != currJ){
            if(j < currJ){
                move.push('R');
                j++;
            }else{
                move.push('L');
                j--;
            }
        }
        move.push('!');
    }
return move.join("");
}
console.log(boardPath('leet'));