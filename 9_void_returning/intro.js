// Void means nothing. 
// A function that returns nothing should be marked with the reserved void keyword.
function fun(n) {
    console.log("inside fun function");
    return n + 10;
}
var s = fun(10);
console.log(s);
// t is not recommended to use any or leave out a type. Instead, void should be used to avoid any unnoticed change in behavior.
