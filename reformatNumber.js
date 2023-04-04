var reformatNumber = function(number) {
    let str = number;
    for(let i=0; i < str.length; i++){
        if(str[i] == "-" || str[i] == " "){
            str = str.substring(0,i) + str.substring(i+1);
            i--;
        }
    }
    let res = "";
    console.log(str);
    while(str.length >= 4){
        str.length == 4 ?
            res += str.substring(0,2) + "-" + str.substring(2)
            :
            res += str.substring(0,3) + "-";
    str = str.substring(3);
    }
return res;
};

reformatNumber("123 4-567");