/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

//!=========================================

// const str = 'Hello world';

// const post = 'this is random message';
// const shortPost = post.slice(0, 3) + '...';
// console.log(shortPost);

//!=========================================

// const fullName = 'Ruslan Kudlay';

// const firstName = fullName.slice(0, 6);
// const lastName = fullName.slice(7);

// console.log(firstName);
// console.log(lastName);

// console.log(`Hello ${firstName}`);

//!=========================================

// toLowerCase/toUpperCase

// const email = 'MySuperPuperEmail@gmail.com';
// email.toLowerCase();

// const topic = 'My First Topic';
// const updatedTopic = topic.toUpperCase();
// console.log(updatedTopic);
// const str = 'hello world';
// const lowerSTR = str.toLowerCase();
//!=========================================

// const userEmail = 'my-poshta@gmail.com';
// const isValidEmail = userEmail.includes('@');

// if(!isValidEmail ){
//     console.log('У вас невалідний емейл')
// }

// const userEmail = 'kudlay.ruslan@gmail.com';

// if (userEmail.includes('.ru')) {
//   console.log('Вийди звідси розбійник');
// } else {
//   console.log('Ласкаво просимо');
// }

//!=========================================
// const userEmail = 'kudlay.ruslan@mail.ru';

// if (userEmail.endsWith('.ru')) {
//   console.log('Вийди звідси розбійник');
// } else {
//   console.log('Ласкаво просимо');
// }

//!=========================================

// const nickname = '@testuser';
// if (nickname.startsWith('@')) {
//   console.log('Валідний нікнейм');
// } else {
//   console.log('Додайте символ @ на початок');
// }

//!=========================================

// const fullName = 'awdawdawd sefsefsef';

// const index = fullName.indexOf(' ');

// const firstName = fullName.slice(0, index);
// const lastName = fullName.slice(index + 1);

// console.log(firstName);
// console.log(lastName);

//!=========================================

// const email = 'volodymyr@gmail.com';
// const index = email.indexOf('@');
// const nickname = email.slice(0, index + 1);
// console.log(nickname);

//!=========================================

// const email = '   awda wdaw daw@ mail.com.   '.trim();
// console.log(email);
