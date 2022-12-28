const x: number = 10;
let z: number = 15;
var p: number = 123;
console.log("Here are 3 variables of type number", x, z, p);

// there is no need to declare type of variable at declaration time

// if hover over below it'll show number as type since ts knows value will may change as they are let
// let dec2 = 10; 
// let hex2 = 0x10; 
// let octo2 = 0o10; 
// let bin2 = 0b10; 
// console.log("Here is 4 numbers", dec2,hex2,octo2,bin2);


// if hover over below it'll show exact value since ts knows value will not changes now
const dec2 = 10; 
const hex2 = 0x10; 
const octo2 = 0o10; 
const bin2 = 0b10; 
console.log("Here is 4 numbers", dec2,hex2,octo2,bin2);