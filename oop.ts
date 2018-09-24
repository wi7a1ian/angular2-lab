//>tsc oop.ts & node oop.js

class Car {  
    // Property (public by default)
    engine: string;

    // Constructor 
    // (accepts a value so you can initialize engine)
    constructor(engine: string) {
        this.engine = engine;
    }

    start() {
        return "Started " + this.engine;
    }
} 

var hondaAccord = new Car('V6'); 

// -----------------------------

class Person {
  name:string;
  age:number;

  constructor (name:string, age:number){
    this.name = name;
    this.age = age;

  }

  static canLegallyVote (p:Person){
    return p.age >= 18;
  }
}


var sam:Person = new Person("Sam", 21);

console.log(Person.canLegallyVote(sam))

// -----------------------------

class Auto {  
    engine: string;
    constructor(engine: string) {
        this.engine = engine;
    }
} 

class ManlyTruck extends Auto {  
    bigTires: boolean;
    constructor(engine: string, bigTires:boolean) {
        super(engine);
        this.bigTires = bigTires;
    }
}

// -----------------------------

interface ILivingAnimal{  
    type: string;
    genre: number;
}

class Dog implements ILivingAnimal {  
    constructor (public type: string, public genre: number) {
    }
} 

// -----------------------------

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

// -----------------------------

var firstName = "Bob";
var lastName = "Smith";

// interpolate a string
var greeting = `My name is  ${firstName} ${lastName}`;
console.log(greeting);

// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
