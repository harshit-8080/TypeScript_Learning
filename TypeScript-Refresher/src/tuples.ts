// tuples are a specific type that allows you to express an array with a fixed number of elements.
// where each element can have a different type.

const response: [number, string] = [100, "harshit"];

console.log(response);

type Person = [string, number];
const people: Person[] = [
  ["Alice", 25],
  ["Bob", 30],
];
