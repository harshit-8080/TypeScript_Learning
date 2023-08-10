let number = [1, 2, 3, 4];

const firstName: string[] = ["a", "b", "c", "d", "100"];

firstName.push("harshit");

console.log(firstName);

let fixed: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// In TS, We have concept of Mutable and immutable Array

// using ReadOnly we can restrict the behaviour.
