/**
 * JSON
 */
//!=========================================
//? JSON.stringify()

// const data = [1, 2, 3, true, 'Hello'];

// const data = {
//   name: 'Vasya',
//   age: 25,
//   isStudent: true,
//   role: 'student',
//   salary: undefined,
//   showName() {
//     console.log(this.name);
//   },
// };

// console.log(data.toString());

// const jsonData = JSON.stringify(data, null, 2);

// console.log(jsonData);

//!=========================================
//? JSON.parse()

// const jsonData = `{
//   "name": "Vasya",
//   "age": 25
// }`;

// console.log(jsonData);

// const obj = JSON.parse(jsonData);

// console.log(obj);

//!=========================================
//? TRY CATCH

// try {
//   const userJson = prompt('Enter your json data');
//   const data = JSON.parse(userJson);
//   console.log('DATA', data);
// } catch (err) {
//   console.log('Помилка під час парсингу ДАНИХ');
// }

// console.log('The end');

//!=========================================

/**
 * LocalStorage
 */
//!=========================================

// localStorage.setItem('Name', 'Vasya');
// localStorage.setItem('Lastname', 'Prokopenko');

// const data = {
//   name: 'Vasya',
//   lastname: 'Prokopenko',
// };

// localStorage.setItem('obj', JSON.stringify(data));

//!=========================================
// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

/**
 * Видалення
 */

/**
 * LocalStorage не може зберігати функції
 */

// function add(a, b) {
//   return a + b;
// }

// const calculator = {
//   a: 5,
//   b: 10,
//   add() {
//     return this.a + this.b;
//   },
// };

//!=========================================
const user = { name: 'Vasya' };

// localStorage.setItem('user1', JSON.stringify(user));
// localStorage.setItem('user2', JSON.stringify(user));
// localStorage.setItem('user3', JSON.stringify(user));
// localStorage.setItem('user4', JSON.stringify(user));

saveToLS('user1', user);
saveToLS('user1', user);
saveToLS('user1', user);
saveToLS('user1', user);

//!=========================================
function saveToLS(key, value) {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
}
//!=========================================

// try {
//   const jsonData = localStorage.get('user1');
//   const data = JSON.parse(jsonData);
// } catch (err) {
//   console.log(err);
// }
// try {
//   const jsonData = localStorage.get('user1');
//   const data = JSON.parse(jsonData);
// } catch (err) {
//   console.log(err);
// }
// try {
//   const jsonData = localStorage.get('user1');
//   const data = JSON.parse(jsonData);
// } catch (err) {
//   console.log(err);
// }
// try {
//   const jsonData = localStorage.get('user1');
//   const data = JSON.parse(jsonData);
// } catch (err) {
//   console.log(err);
// }

//!=========================================

function loadFromLS(key) {
  const json = localStorage.getItem(key);

  try {
    const data = JSON.parse(json);
    return data;
  } catch (err) {
    console.log(err);
    return json;
  }
}

loadFromLS('user1');
loadFromLS('user2');
loadFromLS('user3');
loadFromLS('user4');
//!=========================================

// function saveToLS(key, value) {
//   const data = JSON.stringify(value);
//   localStorage.setItem(key, data);
// }

// function loadFromLS(key) {
//   const json = localStorage.getItem(key);

//   try {
//     const data = JSON.parse(json);
//     return data;
//   } catch (err) {
//     console.log(err);
//     return json;
//   }
// }
