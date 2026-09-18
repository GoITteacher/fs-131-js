/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

//!=========================================
const numbers = [5, 1, 2, 6, 9];

// const total = numbers.reduce((acc, elem, i, arr) => {
//   return acc + elem;
// }, 0);

// console.log(total);

// const filtered = numbers.reduce((arr, elem) => {
//   if (elem % 2 == 0) {
//     arr.push(elem);
//   }

//   return arr;
// }, []);

// console.log(filtered);
//!=========================================
/**
 * Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((total, elem) => {
//   return total + elem;
// }, 0);

// console.log(totalSalary);

//!=========================================
/**
 * Рахуємо загальну кількість годин
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce((acc, elem) => acc + elem.timePlayed, 0);

// console.log(totalTimePlayed);

//!=========================================
/**
 * Рахуємо загальну суму товарів кошика
 */

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((acc, elem) => {
//   return acc + elem.price * elem.quantity;
// }, 0);

// console.log(totalAmount);

//!=========================================
