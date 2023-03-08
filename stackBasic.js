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
    let ans = powerOfTwo(a,b-1);
    return ans * a ;
}
console.log(powerOfTwo(2,6))