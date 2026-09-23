/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */

//!=========================================
// const x = 10;
// const y = 'Hello world';
// const t = true;

// x.toString();
// y.toString();
// t.toString();

// const arr = [1, 2, 3];

// console.log(arr);

//!=========================================
// const data = {
//   t1: 100,
//   t2: 200,
//   t3: 300,
// };

// const obj1 = {
//   x1: 10,
//   x2: 20,
//   __proto__: data,
// };

// console.log(obj1);
// console.log(obj1.t3);

// console.log(obj1.toString());

//!=========================================

// const userPrototype = {
//   showName() {
//     console.log(this.name);
//   },
//   showAge() {
//     console.log(this.age);
//   },
//   showInfo() {
//     this.showName();
//     this.showAge();
//   },
// };

// const user1 = Object.create(userPrototype);
// const user2 = Object.create(userPrototype);
// const user3 = Object.create(userPrototype);

// const user1 = {
//   name: 'Vasya',
//   age: 25,
//   __proto__: userPrototype,
// };

// console.log(user1);

// user1.showName();

//!=========================================
// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.a);

// console.log(objA.hasOwnProperty('b'));
// console.log(objA.b);

// console.log(objA.hasOwnProperty('c'));
// console.log(objA.c);

// console.log(objA.hasOwnProperty('x'));
// console.log(objA.x);

//!=========================================

const userPrototype = {
  balance: 100,
  showName() {
    console.log(this.name);
  },
  showAge() {
    console.log(this.age);
  },
  showInfo() {
    this.showName();
    this.showAge();
  },
};

const user1 = {
  name: 'Vasya',
  age: 25,
  __proto__: userPrototype,
};

console.log(user1.name);
console.log(user1.balance);

console.log(user1.hasOwnProperty('balance'));
console.log(user1.hasOwnProperty('name'));

user1.__proto__.__proto__.test = 25;

for (const key in user1) {
  console.log(key);
}

console.log(user1);
