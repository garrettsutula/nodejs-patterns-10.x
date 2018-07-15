export default class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  sayName() {
    console.log(`hi my name is ${this.first} ${this.last}`);
  }
}
