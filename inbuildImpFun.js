const { type } = require("express/lib/response");

let name = "md ashif reza";
let nameArr = name.split(" ");
console.log(nameArr,typeof nameArr,Array.isArray(nameArr));
console.log(nameArr.length);
//join inbuild method return array as a string not change array
// let text = name.join();
// console.log(name);
const fruits = [2,3,4,8];
let text = fruits.join('ashif');
console.log(text,typeof(texts));

//
let arr = [2,3,4,5,2,3,6,7,8];
let set = new Set(arr);
let res = [...set];
console.log(res)