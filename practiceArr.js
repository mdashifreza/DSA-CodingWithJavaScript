const arr = new Array(1,2,3,4);
console.log(arr,typeof arr,Array.isArray(arr) );
arr.push(10,11,12);
console.log('push result',arr);
arr.pop();
console.log('pop result',arr);
//shift 
arr.shift();
console.log('shift result',arr);
//unshift
arr.unshift(-2,-1,0);
console.log('unshift result',arr);
//slice
const arrSlice = ['md','ashif','reza'];
let result = arrSlice.slice(0,1);
console.log(result);
//splice
const arrSplice = ['md','ashif','reza'];
arrSplice.splice(0,2,'azhaan','kahn')
console.log(arrSplice);
//concat array 
const conc = arrSlice.concat(arrSplice);
console.log('cocate result',conc);
//join()
const joinex = [2,3,4,5];
let resjoinex = joinex.join('|');
console.log(resjoinex, typeof resjoinex);
//filter
let filterArr = [2,4,6,8,10];
let filterArrRes1 = filterArr.filter((items)=>{
    if( items % 2 == 0  & items > 2)
    {
        return items;
    }
})
console.log(filterArrRes1, Array.isArray(filterArrRes1));

let filterArrRes2 = filterArr.map((items)=>{
    if(items % 2 == 0 )
    {
        return items * 2;
    }
})
console.log(filterArrRes2);
//reduce example
let reduceArr = [1,3,5,7,9];
let resultReduce = reduceArr.reduce((accu,items)=>{
    return accu = accu + items ;
})
console.log(resultReduce);
//include
let includeResult = reduceArr.includes('a');
console.log(includeResult);
