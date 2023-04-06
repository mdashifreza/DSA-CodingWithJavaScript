var mirror = function(n){
    let rev = "";
    let num = n;
    while(num != 0){
        let rem = num%10; 
        if(rem === 2 || rem === 3 || rem === 5 || rem === 7 || rem === 4){
            return false;
        }
        rev += rem; 
        num = Math.floor(num/10);
    }
    let rev2 = rev.split(""); 
    for(let i=0; i<rev2.length; i++){
        if(rev2[i] === "9"){
            rev2[i] = "6";
        }
        else if(rev2[i] === "6"){
            rev2[i] = "9";
        }
    }
    rev2 = rev2.join("");
    if(parseInt(rev2) !== n){
        return false;
    }
return true;
}
console.log(mirror(191))