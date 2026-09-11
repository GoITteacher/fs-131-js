/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */
//!=========================================

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const res = [...arr1, ...arr2, ...arr3, ...arr3, ...arr3];
// console.log(res);

//!=========================================

// const arr = ['test1', 'test2', 'test3', 'test4'];
// const copy = [...arr];

//!=========================================
/**
 *
 * Пошук найменшої аьо найбільшої температури (числа)
 */

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps));

// Math.min(...temps);

//!=========================================
/*
 * Поєднуємо кілька масивів в один через spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);
//!=========================================
/*
 * Створення об'єкта
 */

// const objA = { x1: 1, x2: 2, test: 'Hello' };
// const objB = { y1: 0, y2: 3, test: 'World' };

// const objC = {
//   ...objA,
//   ...objB,
// };

// console.log(objC);

//!=========================================

// const user = {
//   name: 'Vasya',
//   age: 25,
// };

// const copy = { name: 'Vasya', age: 25 };

//!=========================================
/**
 * Оновлюємо налаштування користувача
 */

// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

//!=========================================

//!=========================================

// function foo(x, y, ...arr) {
//   console.log(arr);
// }

// foo(10, 20, 30, 40, 50, 60, 70);

//!=========================================

// function foo(...args){

// }
