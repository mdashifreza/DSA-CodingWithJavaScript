var pi = function(sn,en){
    if( sn > en )
    {
        return ;
    }
    console.log(sn);
    pi(sn+1,en);
}
pi(1,10);
console.log('-----------------------------')
var pd = function(sn,en){
    if( sn > en )
    {
        return ;
    }
    pd(sn+1,en);
    console.log(sn);
}
pd(1,10);
