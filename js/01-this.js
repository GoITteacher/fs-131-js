/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */
//!=========================================

/**
 * Глобальний контекст
 */

// function foo() {
//   console.log('foo -> this', this);
// }

// foo();

//!=========================================
/**
 * Контекст методу об'єкта
 */

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log(this);
//   },
// };

// borys.showTag();
// user.showTag();

//!=========================================
/**
 * Контекст методу об'єкта, але оголошено як зовнішню функцію.
 */

// function showTag() {
//   console.log('showTag -> this', this);
//   console.log('showTag -> this.tag', this.tag);
// }

// const mango = {
//   tag: 'Mango',
//   copy: showTag,
// };

// mango.copy();

//!=========================================

/**
 * Виклик без контексту, але оголошено як метод об'єкта.
 */

// const poly = {
//   tag: 'Poly',
//   showTag() {
//     console.log(this);
//   },
// };

// poly.showTag();

// const copy = poly.showTag;

// copy();

//!=========================================
/**
 * Контекст у callback-функціях
 */

// const jacob = {
//   tag: 'Jacob',
//   showTag() {
//     console.log(this);
//   },
// };

// jacob.showTag();

// function invokeAction(copy) {
//   const borys = {
//     test: copy,
//   };

//   borys.test();
// }

// invokeAction(jacob.showTag);

//!=========================================
