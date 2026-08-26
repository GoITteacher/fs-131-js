/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

//!=========================================

// function myDay() {
//   console.log('1)');
//   console.log('2)');
//   console.log('3)');
//   console.log('4)');
//   console.log('5)');
//   console.log('6)');
// }

// myDay();
// myDay();
// myDay();
// myDay();
// myDay();

//!=========================================

// function sayHello(firstName, lastName) {
//   console.log(
//     `Hello ${firstName} ${lastName}. Vasya from Dnipro. Vasya likes movie`,
//   );
// }

// sayHello('Vasya', 'Potapenko');
// sayHello()

//!=========================================

// function sum(hello, world) {
//   console.log(hello + world);
// }

// sum(1, 2);
// sum(2, 6);
// sum(3, 9);
// sum(4, 7);

//!=========================================

// function myDay(food) {
//   console.log('Прокинутись');
//   console.log('Почистити зуби');
//   console.log('Поснідати');
//   console.log('Піти до школи');
//   console.log(`Зїсти ${food}`);
//   console.log('Повернутись зі школи');
//   console.log('Зробити уроки');
//   console.log('відпочивати');
//   console.log('Спати\n\n\n\n');
// }

// myDay()

// myDay('яблуко');
// myDay('бутерброд');
// myDay('банани');
// myDay();
// myDay('бутерброди', 100);

// Math.round(12)

//!=========================================

// function sum(x, y) {
//   return (x + y) * 2;
// }

// const result = sum(2, 3) + sum(3, 4);

//!=========================================

// function round(x, y) {
//   return Math.round(x) + Math.round(y);
// }
// const result = round(10.4, 11.9);
// console.log(result);

//!=========================================

// Задача - 1;
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2. В іншому випадку функція повинна повернути булеве значення false.

// function task1(str1, str2) {
//   const firstLetter = str1[0];
//   const lastLetter = str2[str2.length - 1];

//   return firstLetter === lastLetter;
// }

// console.log(task1('password', 'help'));

//!=========================================
// Задача - 2;
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2. В іншому випадку функція повинна повернути булеве значення false.
