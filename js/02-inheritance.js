/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Animal {
  constructor(breed, name, age) {
    this.breed = breed;
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log('Ням ням');
  }
  sleep() {
    console.log('Zzzzzz');
  }
  showInfo() {
    console.log(this.name);
    console.log(this.breed);
    console.log(this.age);
  }
}

class Dog extends Animal {
  constructor(breed, name, age) {
    super(breed, name, age);
    this.paws = 4;
  }

  sayWoof() {}
}

const dog1 = new Dog('spaniel', 'Lord', 5);

console.log(dog1);
