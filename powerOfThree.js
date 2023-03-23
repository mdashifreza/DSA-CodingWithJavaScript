var isPowerOfThree = function(n) {
    let ans = 0;
    if(n === 0 || n === -1){
        return false;
    }
    else if (n === 1 ){
        return true;
    }
    else if(n < 1 && n % 3 !== 0){
        return false;
    }
    else{
        ans = isPowerOfThree(n/3);
    }
return ans;
};
console.log(isPowerOfThree(27));