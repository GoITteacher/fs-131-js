/**
 * Деструктуризація об'єкта
 */

//!=========================================

// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'Dnipro',
//   phoneNumber: '-123424123',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { age, username, country, city} = user;

// const city = user.city;
// const age = user.age;
// const username = user.username;
// const country = user.country

//!=========================================

// VALUE BY DEFAULT

// const {
//   city = 'Dnipro',
//   age = 0,
//   username = 'ANONYM',
//   country = 'Ukraine',
// } = user;

//!=========================================

// CHANGE NAME

// const country = 'Ukraine';

// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'Dnipro',
//   country: 'USA',
//   phoneNumber: '-123424123',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { country: testCountry } = user;
// const testCountry = user.country

// const { country: userCountry } = user;
// const userCountry = user.country

// const { country: country1, country: country2, country: country3 } = user;
// const country1 = user.country
// const country2 = user.country
// const country3 = user.country

//!=========================================
// CHANGE NAME && DEFAULT VALUE
// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'Dnipro',
//   country: 'USA',
//   phoneNumber: '-123424123',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { age: userAge = 0 } = user;
// const userAge = user.age || 0;

//!=========================================
/**
 * Глибока деструктуризація об'єкта
 */
//!=========================================

// const user = {
//   username: 'Jacob name',
//   age: 25,
//   phoneNumber: '-123424123',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
//   address: {
//     city: 'Dnipro',
//     country: 'USA',
//     location: {
//       x: 10,
//       y: 20,
//     },
//   },
// };

// const {
//   address: { city, country, location },
//   skills: { html, css, js },
// } = user;

// const { x, y } = location;

// console.log(html, css, js);

// const {skills} = user;
// const { html, css, js } = skills;

//!=========================================

// const book = {
//   id: '234345123123',
//   title: 'Test',
//   author: 'Volodka',
//   price: 500,
//   pages: 250,
// };

// const { id, ...newBook } = book;
// const { title, author, ...options } = book;

// console.log(newBook);

//!=========================================

/**
 * Деструктуризація масива
 */

// const arr = [1, 2, 3, 4, 5];
// const [x1, x2, x3] = arr;
// console.log(x1, x2, x3);

// const rgba = [100, 200, 255];
// const [red = 0, green = 0, blue = 0, alpha = 1] = rgba;
// console.log(alpha);
