/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

//!=========================================

// class Car {
//   constructor(model, price, year) {
//     this.brand = 'Tesla';
//     this.discount = 5;

//     this.model = model;
//     this.price = price;
//     this.year = year;
//   }

//   showShortInfo() {
//     console.log(`${this.brand} ${this.model}`);
//   }

//   showFullInfo() {
//     console.log(`Brand: ${this.brand}`);
//     console.log(`Model: ${this.model}`);
//     console.log(`Price: ${this.price}`);
//     console.log(`Year: ${this.year}`);
//   }
// }

// const car1 = new Car('S', 500, 2022);
// const car2 = new Car('E', 600, 2023);
// const car3 = new Car();

// console.log(car3);

//!=========================================

// class User {
//   #age;
//   #balance;
//   #discount = 10;
//   static amount = 0;

//   constructor(name, age, balance) {
//     User.amount += 1;
//     this.name = name;
//     this.#age = age;
//     this.#balance = balance;
//   }

//   static showInstruction() {
//     console.log('Це клас для створення користувачів');
//     console.log('Конструктору потрібно передавати імя вік і баланс');
//   }

//   #showName() {
//     console.log(`Name: ${this.name}`);
//   }

//   #showAge() {
//     console.log(`Age: ${this.#age}`);
//   }

//   #showBalance() {
//     console.log(`Balance: ${this.#balance}`);
//   }

//   showInfo() {
//     this.#showName();
//     this.#showBalance();
//     this.#showAge();
//   }

//   get balance() {
//     return `Balance: ${this.#balance}`;
//   }

//   set balance(newValue) {
//     if (newValue >= 0 && newValue <= 100000) {
//       this.#balance = newValue;
//     }
//   }

//   get discount() {
//     return this.#discount;
//   }
// }

// const user1 = new User('Vasya', 25, 200);
// const user2 = new User('Vasya', 25, 200);
// const user3 = new User('Vasya', 25, 200);
// const user4 = new User('Vasya', 25, 200);

// console.log(User.amount);

// console.log(user1.balance);

// user1.balance = 50;

// user1.discount = 25;
// console.log(user1.discount);

//!=========================================
