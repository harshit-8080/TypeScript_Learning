var b = false;
var a = true;
var number1 = 5;
var number2 = 5;
var number3 = 100;
var biggerThan = number1 > number3;
console.log(biggerThan); // False
var smallerThan = number1 < number3;
console.log(smallerThan); // True
var biggerOrEqualThan = number1 <= number2;
console.log(biggerOrEqualThan); // True
var beEqual = number3 === number3;
console.log(beEqual); // True
var notBeEqual = number1 !== number3;
console.log(notBeEqual); // True




var x1 = undefined;  // false
var x2 = null;  // false
var x3 = -0;    // false
var x4 = 0; // false
var x5 = NaN;   // false
var x6 = {};    // true
var x7 = [];    // true

function printTrueOrFalse(b) {
    if (b) {
        console.log("The value ".concat(b, " is true"));
    }
    else {
        console.log("The value ".concat(b, " is false"));
    }
}

printTrueOrFalse(x1);
printTrueOrFalse(x2);
printTrueOrFalse(x3);
printTrueOrFalse(x4);
printTrueOrFalse(x5);
printTrueOrFalse(x6);
printTrueOrFalse(x7);
