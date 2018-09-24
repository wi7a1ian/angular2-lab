// var - global scope
// let - block scope
function sayHello(name) {
    return "Hello " + name;
}
var result = sayHello("Cat");
// -----------------------------
var music = ['Country', 'Western'];
var team = ['Cowboys', 'Rams', 'Eagles'];
var scores = [18, 21];
// -----------------------------
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Orange"] = 3] = "Orange";
    Color[Color["White"] = 4] = "White";
    Color[Color["Purple"] = 5] = "Purple";
})(Color || (Color = {}));
;
var aColor = Color.Green;
console.log("you see the color:" + aColor);
var bColor = Color.Red;
if (aColor == bColor) {
    console.log("They match");
}
else {
    console.log("They do not match");
}
// -----------------------------
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Blue"] = 3] = "Blue";
    Color2[Color2["Green"] = 5] = "Green";
    Color2[Color2["Orange"] = 7] = "Orange";
    Color2[Color2["White"] = 8] = "White";
    Color2[Color2["Purple"] = 9] = "Purple";
})(Color2 || (Color2 = {}));
;
for (var i = 0; i < 11; i++) {
    console.log(i + " is:" + Color2[i]);
    console.warn(i + " is:" + Color2[i]);
}
// -----------------------------
var foo = 123;
if (true) {
    var foo_1 = 456;
}
console.log(foo); // 123
// -----------------------------
var x2 = 34;
//x2 = 44; // error TS2540: Cannot assign to 'x2' because it is a constant or a read-only property.
// -----------------------------
// Named function
function add(x, y) {
    return x + y;
}
// Anonymous function
var myAdd = function (x, y) { return x + y; };
// Fat Arrow - Lambdas
var multiply = function (x, y) { return x * y; };
// -----------------------------
var makeThing2 = function (id, name) { return ({ id: id, name: name }); };
console.log(makeThing2(3, "abc"));
// -----------------------------
function buildCar(make, color, year, option1, option2) {
    var str = "You have a " + year + " " + Color[color] + " " + make;
    if (option1) {
        str = str + " with " + option1;
    }
    if (option2) {
        str = str + " and " + option2;
    }
    return str;
}
var s1 = buildCar("Ford", Color.Red, 1994);
console.log(s1);
var s2 = buildCar("Ford", Color.Red, 1994, "leather seats");
console.log(s2);
var s3 = buildCar("Ford", Color.Red, 1994, "leather seats", "cup holder");
console.log(s3);
// -----------------------------
function orderCoffee(regular, withCream) {
    if (withCream === void 0) { withCream = false; }
    return 'I want a ' + (regular ? 'regular coffee ' : 'decaf coffee ') + (withCream ? 'with cream ' : 'no cream');
}
console.log(orderCoffee(true));
console.log(orderCoffee(true, true));
// -----------------------------
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var hisName = buildName("John", " Jacob", "Jingleheimer", "Schmidt");
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
