// Immutable array -> readonly array

let list: ReadonlyArray<number> = [1, 2]; // since it's read only array, we can push and pop elements
console.log(list);


// another way
let list1: readonly number[] = [1, 2];
console.log(list1);


// What is the difference between a constant array and a read-only array?” 
// The answer is that a constant array won’t let you assign values to a list 
// while a read-only array blocks you from changing values.

const kl:number[] = [20,40];
kl[2] = 60; // it'll allow to add some values but readonlyArray doesn't
console.log(kl);



// ----> best way
const lp: readonly number[] = [100,200];
console.log(lp);