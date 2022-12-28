// The unknown type is half a specific explicit type and half the type any which allows everything. 
// unknow is better than any 


// any
let variable1: any;
variable1 = "It is a string";
console.log(typeof variable1); // string
variable1 = 1;
console.log(typeof variable1); // number


// unknow
let variable2: unknown;
variable2 = "It is a string";
// console.log(variable2.substr(0,2)) // Does not compile here
variable2 = 1;
// console.log(variable2.substr(0,2)) // Does not compile here

let variable3: unknown;
variable3 = "It is a string";
let variable3String = variable3 as string;
console.log(variable3String.substr(0,2)) 