//O(n) time complexity
var twoSum = function(a,b){
    let sum = 0;
    for( let i=0; i<=b ;i++ )
    {
        sum = a;
        sum = sum + i;
    }
    return sum;
}
console.log(twoSum(2,3));
//smarter way to do using bitwise operator
var twoSumBitwise = function(a,b){
    while( b != 0 )
    {
        let temp = (a & b) << 1;
        a = a ^ b;
        b = temp;
    }
    return a;
}
console.log(twoSumBitwise(2,-10));