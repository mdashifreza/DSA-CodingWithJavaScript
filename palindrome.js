function palindrome(inputNum){
    let num = inputNum;
    if(num < 0)
    {
        return false;
    }
    console.log(num)
    let rev = 0;
    let rem = 0;
    while(num > 0)
    {
        rem = num % 10;
        rev = rev*10 + rem;
        num = parseInt(num/10);
    }
    console.log(rev)
    if(rev == inputNum)
    {   
        
        return true;
    }
    else
    {
        return false;
    }
}
let yesNo = palin(16461);
console.log(yesNo,typeof yesNo);