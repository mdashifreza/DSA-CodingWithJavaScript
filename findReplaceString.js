var findAndReplacePattern = function(words, pattern) {
    let res = [];
    for(let word of words){
        const mapW = {};
        const mapP = {};
        let flag = true;
        for(let j=0; j < pattern.length; j++){
        curr_ch_Word = word[j];
        curr_p = pattern[j];
            if(mapW[curr_ch_Word] && mapW[curr_ch_Word] != curr_p || mapP[curr_p] && mapP[curr_p] != curr_ch_Word){
                flag=false;
                break;
            }
            else{
                mapW[curr_ch_Word] = curr_p;
                mapP[curr_p] = curr_ch_Word;
            }
        }
        if(flag){
            res.push(word);
        }
        // console.log(mapW);
    }
return res;
};
console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"],"abb"))
