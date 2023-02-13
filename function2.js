function myFun(x){
    console.log(typeof x,x.length);
};
myFun([1,2,3]);
//pure function
function pure(name){
    return `Hello ${name}`;
}
var x=pure(12);
console.log(x);
//
// impure function
var greet="hello";
function impure(name){
    return greet+" "+`${name}`
}
var test=impure("reza")
console.log(test);
//first class citizen
function fun1(name){
    return name;
}
var a=fun1;
console.log(a("md ashif reza"));
//store as a data structure
var b=[fun1];
console.log(b[0]("good morning"))
//owner of a property
a.myProperty="mango";
console.log(a.myProperty);
//higher oreder function
var myNums = [1, 2, 3, 4, 5];
var data = myNums.map((nums)=>{return nums*2});
console.log(data)
//
//HOF
//destructuting
const person={
    name:"ashif",
    age:22,
    gender:"M"
}
let {name , age , gender}=person;
console.log(name,age,gender);
