var numberOfBits = function(n){
    let countOne = 0;
    while( n!==0 )
    {
        let addOp = n&1;
        if(addOp == 1)
        {
            countOne++;
        }
        n = n>>>1;
    }
    return countOne;
}
console.log(numberOfBits(01001001010))