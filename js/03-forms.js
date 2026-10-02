/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

// const form = document.querySelector('.js-form');

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const formData = new FormData(form);

//   const data = {
//     email: formData.get('email'),
//     password: formData.get('my-password'),
//     comment: formData.get('user-comment'),
//   };

//   console.log(data);

//   form.reset();
// });

/* 
form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements['my-password'].value;
  const comment = form.elements['user-comment'].value;

  console.log('HELLO SUBMIT');
});
 */

//!=========================================

const formElem = document.querySelector('.js-book-form');
const bookListElem = document.querySelector('.js-book-list');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formElem);

  const book = {
    title: formData.get('title'),
    author: formData.get('author'),
    price: formData.get('price'),
    genre: formData.get('genre'),
  };

  const markup = bookTemplate(book);
  bookListElem.insertAdjacentHTML('afterbegin', markup);

  formElem.reset();
});

function bookTemplate(book) {
  return `<li class="book-item">
        <p>${book.title} - ${book.author}</p>
        <p>Price: ${book.price}</p>
        <p>Genre: ${book.genre}</p>
      </li>`;
}
