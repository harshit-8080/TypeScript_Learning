"use strict";
function calculateArea(length, width) {
    let area = length * width;
    return area;
}
calculateArea(10, 20);
function getInfo(firstName, lastName, age = 20) {
    let fullName = firstName + " " + lastName;
    let value = age * 2;
    console.log(value);
    return fullName;
}
let harshit = getInfo("Harshit", "Raj", 24);
console.log(harshit);
let manikesh = getInfo("Manikesh", "Ranjan");
console.log(manikesh);
//# sourceMappingURL=functions.js.map