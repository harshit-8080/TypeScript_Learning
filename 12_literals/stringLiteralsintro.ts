// To create a string literal, define each value separated by the pipe symbol | (union of values). 
type Direction = "north" | "south" | "east" | "west";

let myDirection:Direction = "north";


// let yourDirection:Direction = "no-where"; // Does not compile
let stringLit2 = "oneValueOnly" as const

