// We can create our own type  and first letter should be capital
var student1 = {
    name: "harshit",
    age: 10,
    address: "pn nagar",
    city: "chapra"
};
console.log(student1);
var student2 = {
    name: "harshit",
    age: 10,
    address: "pn nagar"
};
console.log(student2);
function fun(userData) {
    return userData;
}
var x = fun(student1);
console.log(x);
