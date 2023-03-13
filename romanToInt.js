var romanToInt = function(roman){
    const hash = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    };
    let res = 0;
    for(let i=0; i<roman.length; i++){
        if(hash[roman[i]] < hash[roman[i+1]]){ //LVIII I=0;=L 
            res -= hash[roman[i]];
        }
        else{
        res += hash[roman[i]];
        }
    }
return res;
}
console.log(romanToInt('LVIII')) // ix