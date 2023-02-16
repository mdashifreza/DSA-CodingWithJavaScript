function fiboNachi(num){
    if(num == 0 || num ==1)
    {
        return num;
    }
    return fiboNachi(num-1) + fiboNachi(num-2);
}
let num=10;
let store = [];
for(let i=0; i<num; i++)
{
    store.push(fiboNachi(i));
}

let res = store.filter((items,index)=>{
    if(items == 8)
    {
        return index;
    }
})
console.log(res,typeof res,Array.isArray(res))