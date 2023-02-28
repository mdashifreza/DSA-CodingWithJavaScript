function highestAltitude(gain){
    let max = 0,curr = 0;
    let len = gain.length;
    for(let i=0;i<len; i++)
    {
        curr = curr + gain[i];
        max = Math.max(curr,max);
    }
    return max;
}
let result = highestAltitude([-5,1,5,0,-7]);
console.log(result);