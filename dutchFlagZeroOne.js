function dutchFlagZeroOne(arr){
    let len = arr.length;
    let ptr = 0, itr = 0;
    for(itr=0; itr<len; itr++)
    {
        if(arr[itr] === 0)
        {
            [arr[itr],arr[ptr]] = [arr[ptr],arr[itr]];
            ptr++;
        }
    }
    return arr;
}
let result = dutchFlagZeroOne([0,0,1,0,0,1,1,1,0,]);
console.log(result);