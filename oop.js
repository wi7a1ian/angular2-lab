var Car = (function () {
    // Constructor 
    // (accepts a value so you can initialize engine)
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        return "Started " + this.engine;
    };
    return Car;
}());
var hondaAccord = new Car('V6');
// -----------------------------
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.canLegallyVote = function (p) {
        return p.age >= 18;
    };
    return Person;
}());
var sam = new Person("Sam", 21);
console.log(Person.canLegallyVote(sam));
asdasd;
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
