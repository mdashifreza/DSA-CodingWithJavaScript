// function sayThanks(){
//     console.log ('Thank you for your purchase! We appreciate your business.') ;
// }
//     sayThanks() ;
//     sayThanks() ;
//     sayThanks() ;
// function test(i,j){
//     console.log(i+" "+j)
// }
// test([1,2,3],'ashif');

const { MongoRuntimeError } = require("mongodb");

//arrow function
let f1=num=>num*num;
console.log(f1(2));
//anynymous function => function don't have identifier but have to assign to variable or object to console.
let f=function(){console.log('anonymous function')}
console.log(f(2));
const a=10;
// a=11 // not valid
console.log(a);
//
// self invoking function in js
// these are function are execute without calling while js programme run. for example below: 
(function(i){
    console.log(i);
    console.log('hi myself self invoking function')
})();
// currying in javascirpt//:    
function add(a) {
    return function(b){
    return a + b;
    }
}
console.log(add(12)(4));

//closure property in java script:
//example:01
// var Person=function(name1){
//     var name=name1;
//     this.getName=function(){
//         return name;
//     }
// }
// var personObj=new Person("md ashif reza khan");
// console.log(personObj.getName());
//example-02
function outer(){
    var name="md ashif reza";
    function inner(){
        console.log(name);
    }
    inner();
}
outer();
//example-03
function outer(x){
    return function(y){
        return x+y;
    };
}
var add5=new outer(2);
console.log(add5(5));
// callback 
// function callback(){
//     console.log("start");
// setTimeout(() => {
//     console.log("download file !!")
// }, 5000);
// console.log("done");
// }
// callback();
// bind() method example
var m={
    Firstname:'ashif',
    Lastname:'reza',
    fun1:function(){
        var fullname=this.Firstname+this.Lastname;
        return fullname;
    }
}
var fun2=function(){
    console.log(this.fun1()+"got u")
}
var n=fun2.bind(m);
n();
// object prototype
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}
// creating objects
const person1 = new Person();
Person.prototype.gender="Male";
//prototype value of the person
console.log(Person.prototype);
//data
console.log(person1.name+person1.age+person1.gender)