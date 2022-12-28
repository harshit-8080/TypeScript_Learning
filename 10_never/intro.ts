// The type never means that nothing occurs.
// The never type is a subtype for every type.

//It is used when a type guard cannot occur or in a situation where an exception is always thrown.
function functionThrow(): never {
    throw new Error("This function return never");
}

// There is a difference between void and never. 
// A function that has the explicit return type of never won’t allow your code to return undefined, 
// which is different from a void function that allows code to return undefined.

// In the end, never indicates a state that is not meant to be. 
// An exception is not expected behavior or an infinite loop.
// A condition that is never visited should not exist.