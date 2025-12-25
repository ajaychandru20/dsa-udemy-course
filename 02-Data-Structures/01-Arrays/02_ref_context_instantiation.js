// Reference Type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

console.log(object2); // value:10
object2.value = 20;
console.log(object1); // value:20
console.log(object3); // value:10

let a = [];
let b = [];

let c = {};
let d = {};
console.log(a === b); // []===[] false
console.log(c !== d); // {}!=={} true

// context vs scope

console.log(this); // {} or window = context

const user = {
  name: "ajay",
  arrow2() {
    this.name = "vijay";
    console.log(this.name);
  },
};

user.arrow2(); // this = user

// Instantiation

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi there, I am ${this.name}, I am a ${this.type}`);
  }
}

class Hobbies extends Player {
  constructor(name, type, game) {
    super(name, type);
    this.game = game;
  }

  whatILike() {
    console.log(`I like playing ${this.game}`);
  }

  introduce() {
    console.log(
      `Hi there, I am ${this.name}, I am a ${this.type}, I love playing ${this.game}`
    );
  }
}

const player1 = new Player("Ajay", "Tester");
player1.introduce();
// Hi there, I am Ajay, I am a Tester

const player2 = new Hobbies("Vijay", "Dev", "Cricket");
player2.whatILike();
// I like playing Cricket

player2.introduce();
// Hi there, I am Vijay, I am a Dev, I love playing Cricket



/**
 * Before ES6, JavaScript used constructor functions and the prototype chain to achieve instantiation and inheritance.
 */
/*
function Player(name, type) {
  this.name = name;
  this.type = type;
}

Player.prototype.introduce = function () {
  console.log(
    "Hi there, I am " + this.name + ", I am a " + this.type
  );
};
function Hobbies(name, type, game) {
  Player.call(this, name, type); // inherit properties
  this.game = game;
}
Hobbies.prototype = Object.create(Player.prototype);
Hobbies.prototype.constructor = Hobbies;
Hobbies.prototype.whatILike = function () {
  console.log("I like playing " + this.game);
};

Hobbies.prototype.introduce = function () {
  console.log(
    "Hi there, I am " +
      this.name +
      ", I am a " +
      this.type +
      ", I love playing " +
      this.game
  );
};
var player1 = new Player("Ajay", "Tester");
player1.introduce();
// Hi there, I am Ajay, I am a Tester

var player2 = new Hobbies("Vijay", "Dev", "Cricket");
player2.whatILike();
// I like playing Cricket

player2.introduce();
// Hi there, I am Vijay, I am a Dev, I love playing Cricket



What is happening?

Player → blueprint

new Player() → creates a new object

this → points to that new object

prototype → shared methods

call() → borrow parent constructor

*/