function simpleArrangment(arr){
    let result=[];
    const len =arr.length;
    for(let i=0; i<arr.length;i++)
        if(arr[i] > len)
        {  
            break;
        }
        else
        {
            result[i]=arr[arr[i]];
        }
    return result;
}
let arr=[4,2,3,0,1]
let result = simpleArrangment(arr);
console.log(result);