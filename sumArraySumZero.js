var sumArraySumZero = function(arr,n){
    let hmap = new Map();
    let len = 0;
    let sum = 0;
    let startIndex = 0;
    let lastIndex = 0;
for(let i = 0; i < n; i++){
    sum += arr[i];
    if(sum === 0){ 
        console.log(arr.slice(0, i+1));
        len = i + 1;
    }else{
            if(hmap.has(sum)){      //2-
                len = Math.max(len, i - hmap.get(sum));
                // console.log('len:',len,i,hmap.get(sum))
                startIndex = hmap.get(sum) + 1;
                lastIndex = i;
            }else{
                    hmap.set(sum, i);
            }
    }
}
console.log(arr.splice(startIndex,lastIndex));
console.log(hmap);
return len;
}                           //0,1,2,3,4,5,6,7,8,9
console.log(sumArraySumZero([15,-2,2,-8,1,7,10,23],8))