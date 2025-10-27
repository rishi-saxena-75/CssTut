//console.log('hello')

//primivtive type variables
/* string , number, bool, undefined ,null, Symbol
let x = "hello";
console.log(x);
console.log(typeof(x));

let y = 1.4;
console.log(y);
console.log(typeof(y));

let p = true;
console.log(p);
console.log(typeof(p));

let w;
console.log(w);
w="rishi";
console.log(w);
console.log(typeof(w));
console.log(x,y);

*/

// Refernce types - objects , arryas , functions

/* let course = {
    title:"HHLD",
    description:"projects",
    rating:5
};
console.log(course);

console.log(typeof(course));

console.log(course.title);
console.log(course['description']);


let x = "rishi";
let y = x;
x = "ritika";
console.log(x);
console.log(y);

let p = {name :"rishi"};
let q = p;
p.name = "ritika";
console.log(p);
console.log(q);   */

//arrays are actually objects
 /* let course = ['hld' , 'lid ' , 'dsa' , 6 , null , true];
console.log(course[0]);
console.log(course[1]);
console.log(course[2]);
console.log(course[3]);
console.log(course[4]);
console.log(typeof(course[4]));  */

//functions
/* function createCourse(coursename){
    console.log('creating course name: ' + coursename);

}
createCourse('maths');
createCourse('english'); */

//Execution context
//1. memory phase - variable environment
//2.code phase - thread of execution


//hoisting
/*
//memory phase
createCourse('maths');
console.log(x);

//code phase
function createCourse(coursename){
    console.log('creating course name: ' + coursename);

}
var x = 10; 
console.log(x);
createCourse('english')

*/

// window
/* console.log(a);
var a = 10;
console.log(a);
console.log(this.a);
console.log(window.a);   */

// var, let, const
// const , let - block scooped
// var-function scooped
/* let a = 10;
const b = 20;
var c = 100;
*/

