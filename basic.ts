//>tsc basic.ts & node basic.js

// var - global scope
// let - block scope

function sayHello(name: string): string {
 return "Hello " + name;
}

var result:string = sayHello("Cat");

// -----------------------------

var music: Array<string> = ['Country', 'Western'];
var team: string[] = ['Cowboys', 'Rams', 'Eagles'];
var scores:  number[] = [18, 21];

// -----------------------------

enum Color {Red, Blue, Green, Orange, White, Purple};

var aColor : Color = Color.Green;

console.log("you see the color:"+aColor);

var bColor: Color = Color.Red;

if (aColor as Color == bColor as Color){
  console.log("They match");
} else {
  console.log("They do not match");
}

// -----------------------------

enum Color2 {Red =1 , Blue = 3, Green = 5, Orange = 7, White = 8, Purple};

for (var i = 0; i < 11; i++) {
    console.log(i+" is:"+Color2[i]);
    console.warn(i+" is:"+Color2[i]);
}

// -----------------------------

let foo = 123;
if (true) {
    let foo = 456;
}
console.log(foo); // 123

// -----------------------------

const x2 : number = 34;
//x2 = 44; // error TS2540: Cannot assign to 'x2' because it is a constant or a read-only property.

// -----------------------------

// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x+y; };

// Fat Arrow - Lambdas
var multiply = (x, y) => x*y;

// -----------------------------

var makeThing2 =  (id,name) => ({id:id, name:name });

console.log(makeThing2(3,"abc"))

// -----------------------------

function buildCar(make: string, color: Color, year: number, option1?: string, option2?: string): string {
    let str = "You have a " + year + " " + Color[color] + " " + make;
    if (option1) {
        str = str + " with " + option1;

    }
    if (option2) {
        str = str + " and " + option2;
    }
    return str;
}

var s1 = buildCar("Ford", Color.Red, 1994)
console.log(s1);

var s2 = buildCar("Ford", Color.Red, 1994, "leather seats")
console.log(s2);

var s3 = buildCar("Ford", Color.Red, 1994, "leather seats", "cup holder")
console.log(s3);

// -----------------------------

function orderCoffee(regular: boolean, withCream:boolean = false) {
    return 'I want a ' + (regular ? 'regular coffee ' : 'decaf coffee ') + (withCream ? 'with cream ' : 'no cream');
}
console.log(orderCoffee(true))
console.log(orderCoffee(true, true))

// -----------------------------

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let hisName = buildName("John", " Jacob", "Jingleheimer", "Schmidt");

// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
