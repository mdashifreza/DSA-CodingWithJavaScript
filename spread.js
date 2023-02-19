//spread operator
function func(...args){
    console.log(args);
}
func(3);
func(2,1,2,4);
function sumSpread(x,y,z){
    return x+y+z;
}
let input = [2,4,6,8,9]
let result = sumSpread(...input);
console.log(result);