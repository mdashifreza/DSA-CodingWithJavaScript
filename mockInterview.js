var mirror = function(n){
    let readable = ["0","1","8","6","9"];
    let rev = n.toString();
    rev = rev.split("").reverse().join("");
    for(let i=0; i<rev.length; i++){
        if(!readable.includes(rev[i])){
            return false;
        }
    }
    rev = rev.split("")//converting string to arr
    for(let i=0; i<rev.length; i++){
            if(rev[i] == "9"){
                rev[i] = "6";
            }
            else if(rev[i] == "6"){
                rev[i] = "9";
            }
    }
    rev = rev.join("");
    if(rev != n){
        return false;
    }
return true;
}
console.log(mirror(69))