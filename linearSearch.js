function linearSearch(arr,target){
    let len = arr.length;
    for(let i=0; i<len; i++)
    {
        if(arr[i] === target)
        {
            return [i,arr[i]];
        }
    }
    return [-1,-1];
}
let result = linearSearch([4 ,6, 7, 8, 2, 9, 0, 2],4);
console.log(result);