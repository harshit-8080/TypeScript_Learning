// Void means nothing. 
// A function that returns nothing should be marked with the reserved void keyword.

function fun(n:number):number{

    console.log("inside fun function");
    return n+10;
}

let s = fun(10);
console.log(s);

// any is not recommended to use any or leave out a type. 
// Instead, void should be used to avoid any unnoticed change in behavior.
// Using void is a way to ensure that a function does not return a value regardless of its evolution.