// async function foo() {
//   console.log(1);
//   const res = await axios.get('https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com/public/students')
//   console.log(3);
// }

import axios from 'axios';

//!=========================================

// const p = Promise.resolve(25);
// const res = await p;
// console.log(res);

//!=========================================

// async function foo() {}

// const foo1 = async () => {};

// const user = {
//   name: 'Vasya',
//   async showName() {},
// };

// class User {
//   constructor() {}
//   async showInfo() {}
// }

// document.addEventListener('click', async ()=>{});

// [].forEach(async ()=>{})

//!=========================================

// async function foo() {
//   return 'Hello';
// }
// const x = foo();
// console.log(x);

//!=========================================

async function getPokemons() {
  const promises = [];

  for (let i = 1; i < 100; i++) {
    const promise = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    promises.push(promise);
    console.log(promise);
  }

  const res = await Promise.all(promises);
}

async function getInfo() {
  const studentsPromise = axios.get();
  const carsPromise = axios.get();
  const booksPromise = axios.get();

  const arr = [studentsPromise, carsPromise, booksPromise];

  try {
    const res = await Promise.all(arr);
    console.log(res);
  } catch {}
}
