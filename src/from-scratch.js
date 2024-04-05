const measureRain = (inches) => {
  if (inches === 0) {
    console.log('drought');
  } else if (inches < 2) {
    console.log('dry');
  } else if (inches < 4) {
    console.log('average');
  } else if (inches < 6) {
    console.log('rainy');
  } else if (inches >= 6) {
    console.log('flood');
  };
};
// measureRain(4)

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    return console.log('Hiss hiss!');
  } else if (breed === 'cat') {
    if (age < 5) {
      return console.log('Mew mew!');
    } else {
      return console.log('Meow meow!');
    }
  } else if (breed === 'dog') {
    if (age < 5) {
      return console.log('Arf arf!');
    } else if (age >= 5 && age < 10) {
      return console.log('Woof woof!');
    } else {
      return console.log('Boof!');
    }
  } else {
    return console.log('Happy birthday!');
  };
};
// happyBirthdayPet('done', 10)

const funTypes = (jsType) => {
  if (typeof jsType === "string") {
    return console.log("That's just some text.");
  } else if (typeof jsType === "boolean") {
    return console.log("To bool, or not to bool?");
  } else if (Number.isNaN(jsType)) { //needs to be above number bc it's also a number type
    return console.log("Well, now you're just showing off.")
  } else if (typeof jsType === "undefined") {
    return console.log("Nothing, but I didn't set that.");
  } else if (jsType === null) {
    return console.log("Nothing, and I did set that.");
  } else if (typeof jsType === "number") {
    return console.log("That's a good number.");
  } else if (Array.isArray(jsType)) {
    return console.log("I order you to be indexed.");
  } else if (typeof jsType === "object") {
    return console.log("Anybody got the key?");
  };
};
// funTypes(4)
// funTypes('str')
// funTypes(true)
// funTypes(null)
// funTypes()
// funTypes({})
// funTypes([3, 5])
// funTypes(NaN)

const rounder = (float, roundingSetting) => {
  if (roundingSetting === 'up') {
    return Math.ceil(float);
  } else if (roundingSetting === 'down') {
    return Math.floor(float);
  } else if (roundingSetting === 'honest') {
    return Math.round(float);
  };
};
// console.log(rounder(5.5, 'honest'))

const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return console.log("fizzBuzz!");
  } else if (num % 3 === 0) {
    return console.log("fizz");
  } else if (num % 5 === 0) {
    return console.log("buzz");
  } else {
    return console.log(num)
  }
};
fizzBuzzish(15)

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
