var C1 = /** @class */ (function () {
    function C1(name, price) {
        this.name = name;
        this.price = price;
    }
    C1.prototype.print = function () {
        console.log("Name => ".concat(this.name, ", and Price => ").concat(this.price));
    };
    return C1;
}());
var o1 = new C1("harshit", 1000);
o1.print();
