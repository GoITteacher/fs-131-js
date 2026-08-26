/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('')); // false
// console.log(Boolean(0)); // false

// console.log(Boolean(true)); // true
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean('hello')); // true
// console.log(Boolean('false')); // true
// console.log(Boolean('12')); // true

//!=========================================

// const balance = 0;

// if (balance) {
//   console.log('Можна скуплятись');
// }

//!=========================================

// && - шукає перше false, якщо false не знайшов то повертає останнє значення

// console.log(true && true && true);

//!=========================================

// || - шукає перше true, якщо true не знайшов то повертає останнє значення

// console.log(true || true || true || false || true);
// console.log(false || null);

//!=========================================

// console.log(true && 3);//3

// console.log(false && 3);//false

// console.log(true && 4 && 'kiwi');// k

// console.log(true && 0 && 'kiwi');// 0

// console.log(true || 3);// t

// console.log(true || 3 || 4);// t

// console.log(true || false || 7);//t

// console.log(null || 2 || undefined);// 2

// console.log((1 && null && 2) > 0); //false

// console.log(null || (2 && 3) || 4); // 3

//!=========================================

// true && true || true || true && true && true && true || false
// 1 + 1 + 1 + 0 = 0

// true - 1
// false - 0
// && = *
// || = +

// if(true && false && true){

// }

//!=========================================
