/**
 * Деструктуризація об'єкта в циклі
 */

// const users = [
//   {
//     name: 'Kate',
//     age: 25,
//   },
//   {
//     name: 'Alex',
//     age: 25,
//   },
//   {
//     name: 'Mark',
//     age: 25,
//   },
// ];

// for (const { name, age } of users) {
//   console.log(name, age);
// }

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

// const values = Object.values(user);
// const keys = Object.keys(user);
// const arr = Object.entries(user);

// for (const [key, value] of arr) {
//   console.log(key, value);
// }

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
