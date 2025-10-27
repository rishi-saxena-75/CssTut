/* function hel(){
    let x = 10;
console.log(x);
}
hel();


//lexical scope 
function hello(){
    
    console.log(x);
}
let x =10;
hello(); */

// in js functions are called first class citizens

/* function add(a,b){

    return a+b;
}
console.log(add);
console.log(add(2,3));

let sum = function(a,b){
    return a+b;
}
console.log(sum);
console.log(2,4); */

//using operator
//higher order functions 
/* let sum = function(a,b){
    return a+b;

}
let diff = function(a,b){
    return a-b;
}
function operate(operationFunc , a , b){
    return operationFunc(a , b);
}
console.log(operate(sum,2,3));
console.log(operate(diff,2,3)); */


//arrow function
/* let sum = (a,b) => a+b;
let diff = (a,b) => a-b;

function operate(operateFunc , a ,b){
    return operateFunc(a,b);
}
console.log(operate(sum , 2 ,3));
console.log(operate(diff , 2,3));  */

//function inside a function

function outer(){
    function inner(){
        console.log('hello');
    }
    return inner;
}

let returned = outer();
console.log(returned);
returned();
