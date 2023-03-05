//string compress
var compressString = function (str) {
    let compress = '';
    let count = 1;
    for(let i = 0; i<str.length; i++ )
    {
        if(str[i] === str[i+1])
        {
            count++;
        }
        else{
            if( count>1 )
            {
                compress += str[i] + count;
            }
            else{
                compress += str[i];
            }
            count=1;
        }
    }
    return compress;
}
console.log(compressString('aabbccddeff'));
