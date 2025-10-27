// let and const

//let a = 12; //variable val;ue can be changed
//a = 23;

//const b = 34; //value cant be changed
// b = 38

//console.log(a);
//console.log(b);

// let and const dono se value store kar skte hain but 
// dono differently behave karte hain 
// let change ho skta hai but const nhi ho skta
// let ko first time value dena jaruri nhi hota hain
// const ko intitalize krna jaruri hain bhut

//let c;
// const d;    // this is an error  


//arrow functions 
// purani js mai 3 types ke function the :
// functions statement    ...  function expression  .....   anonymous function

// new js  m 1 type ka function hai ......     jiske teen roop hain .....
// arrow func ---:
// ..... basic fat arrow func ....
//var fnc = () => {};

//() => {};
//call
//fnc();

//   fat arrow func with one parameter  ....
//var fun_2 = (a) => {};
//fun_2(12);  //or


//var fun_3 = para =>{};

//fun_3();
 
//  fat arrow function with implicit return

//var g = () => 12;
//g();
//console.log(g());



//template literals backtick ``
//keyborrd tab ke upar bala button backtick ``
// i want to print
// hey 2 + 2 is 4 and 2 - 2 is 0 and if 2 is 3 + 2 and 6 is 3 - 4 print hello

////console.log(`hey ${2 + 2}`);

//function
function abcd(prm){
    console.log(prm);
}
abcd(12);
abcd();

//for not being undefined we give 
function ab(prm=0){
    console.log(prm);

}
ab(144);
ab();

//rest and spread
//...spread/rest
//ye dot dot dot lgte hjain in dono ko use krnme ke liye

//var a = [1 ,2 ,3 ,4 ,5, 6,7, 8,89];
//var b =[...a]; //spread
//spread means elemts ki saari values ko us jgh bikher dena
// spread use hota hai copy ya fir values kisi aur location pr bikherne ke liye
//rest use hota hain jb humko bache hue values ek variable m dalne honge

//function abc(a,b,c){


  //  console.log(a,b,c);
//}
//abc(1,2,3,4,5,6,7); //yha bachi hue values ignore n ho isliye rest use krenge
 // so new function 
// function abcd(a,b,c,...d){
  //  console.log(a,b,c,d);
 //}
 //abcd(1,2,3,4,5,6,7);



 //destructuring
var a = [1,2,3];
var [b,,c] = a;   // only 1 and 2 output
var [b,c,d] = a;  // 1 and 2 and 3 output
var [b,c,d,e] = a; //  1 2 3 and undefined for d value in output


var obj = {name:"harsh" , age:24};
var {age} = obj;  //object m se age nikli humne

//clases js ,mai
//promises
new Promise((res , rej) => {
  if(true){
    return res();
  }
  else {
    return rej();
  }
})