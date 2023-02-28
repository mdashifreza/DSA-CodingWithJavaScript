function dutchFlagZeroOneTwo(arr){
    let len = arr.length;
    let itr = 0, ptr1 = -1, ptr2 = len-1;
    while( itr<=ptr2 )
    {
        if(arr[itr] === 0)
        {       
            ptr1++;
            [arr[itr],arr[ptr1]] = [arr[ptr1],arr[itr]];
            itr++;
        }
        else
        if( arr[itr] === 1)
        {
            itr++;
        }
        else
        if(arr[itr] === 2)
        {
            [arr[ptr2],arr[itr]] = [arr[itr],arr[ptr2]];
            ptr2--;
        }
    }
    return arr;
}
let result = dutchFlagZeroOneTwo([0,1,0,2,1,0]);
console.log(result);