// map
const nums = [1,2,3,4,5];
console.log(nums);
 //const doubledNums = nums.map((num) => 2*num);
 //filter
 //const doubledNums = nums.filter((num) => num%2 == 0);
 // reduce 
 //const sum = nums.reduce((accumulator , num) => accumulator + num , 0);
 //console.log(doubledNums);
//console.log(sum);
const product = nums.reduce((accumulator , num) => accumulator * num , 1);
console.log(product);