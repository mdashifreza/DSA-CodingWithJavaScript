var check = function (i) {
    let bool = false;
    let num = i;
    while(num != 0){
        let rem = num % 10;
        if(rem === 2 || rem === 5 || rem === 6 || rem === 9){
            bool = true;
        }
        else if(rem === 3 || rem === 4 || rem === 7){
            return false;
        }
        num = Math.floor(num/10);
    }
return bool;
}
var rotatedDigits = function (n) {
    let count = false;
    for (let i = 1; i <= n; i++) {
        return check(i);
    }
// return count;
};
console.log(rotatedDigits(13));