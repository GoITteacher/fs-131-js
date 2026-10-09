const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
    name: 'Laptop',
    price: 20000,
    description:
      'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];

const container = document.querySelector('.products');

//!=========================================

// document.addEventListener('DOMContentLoaded', () => {
//   const markup = itemsTemplate(products);
//   container.innerHTML = markup;
// });

//!=========================================

container.addEventListener('click', e => {
  const liElem = e.target.closest('li');

  if (!liElem) {
    return;
  }

  const id = liElem.dataset.id;
  const product = products.find(el => el.id == id);

  showModal(product);
});

//!=========================================

function itemTemplate({ id, img, name }) {
  return `<li class="item" data-id="${id}">
        <img src="${img}" alt="" />
        <h2>${name}</h2>
      </li>`;
}

function itemsTemplate(items) {
  return items.map(itemTemplate).join('');
}

//!=========================================

function showModal({ img, name, price }) {
  const myModal = basicLightbox.create(
    `
    <div class="modal">
       <img src="${img}"/>
       <h1>${name}</h1>
       <p>${price}</p>
    </div>`,
  );

  myModal.show();
}

//!=========================================

products.filter(({ price }) => price > 500);
