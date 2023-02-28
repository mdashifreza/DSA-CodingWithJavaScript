function dutchFlagZeroOne(arr){
    let len = arr.length;
    let ptr = -1, itr = 0;
    while( itr<len )
    {
        if(arr[itr] === 0)
        {   
            ptr++;
            [arr[itr],arr[ptr]] = [arr[ptr],arr[itr]];
        }
        itr++;
    }
    return arr;
}
let result = dutchFlagZeroOne([0,1,0,1,0,1]);
console.log(result);