"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["north"] = 0] = "north";
    Direction[Direction["east"] = 1] = "east";
    Direction[Direction["west"] = 2] = "west";
    Direction[Direction["south"] = 3] = "south";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction.north);
console.log(Direction[0]);
var choice;
(function (choice) {
    choice["option1"] = "modi";
    choice["option2"] = "amit";
    choice["option3"] = "rahul";
    choice["option4"] = "kejri";
})(choice || (choice = {}));
console.log(choice);
console.log(choice.option3);
//# sourceMappingURL=enum.js.map