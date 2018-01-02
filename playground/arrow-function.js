// Standard Arrow
var square = (x) => {
  var result = x * x;
  return result;
};
console.log(square(9));

// Simplified Arrow
var square2 = (x) => x * x;
console.log(square2(9));

// The this and arguments keywords does not get bound with an arrow function. Therefore use "sayHiAlt".
var user = {
  name: 'Matt',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};
user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
