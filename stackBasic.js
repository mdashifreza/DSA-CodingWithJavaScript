var pi = function(sn,en){
    if( sn > en )
    {
        return ;
    }
    console.log(sn);
    pi(sn+1,en);
}
pi(1,10);console.log('-----------------------------')
var pd = function(sn,en){
    if( sn > en )
    {
        return ;
    }
    pd(sn+1,en);
    console.log(sn);
}
pd(1,10);console.log('-----------------------------')
//power of 2::--- O(n)
var powerOfTwo = function(a,b){
    if( b == 0 ) return 1;
    let ans = powerOfTwo(a,Math.floor(b/2));
    ans *= ans; 
    return b%2 === 0 ? ans : ans * a;  
}
console.log(powerOfTwo(2,5));
//leetcode check power of two problem
var powerOfTwo = function(n){
    if( n <= 0 ) return false;
    if( n == 1 ) return true;
    let  ans = n & (n-1);
    if( ans === 0 )
    {
        return true;
    } 
    return false;
}
console.log(powerOfTwo(4));
console.log(powerOfTwo(3))