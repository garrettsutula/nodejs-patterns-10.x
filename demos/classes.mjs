import Person from '../classes.mjs';

const person = new Person('garrett', 'sutula');
person.first = 'notgarrett';
person.sayName();
