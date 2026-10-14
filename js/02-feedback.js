const STORAGE_KEY = 'feedback-data';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

//!=========================================

form.addEventListener('input', e => {
  const formData = new FormData(form);

  const data = {
    name: formData.get('name'),
    message: formData.get('message'),
  };

  saveToLS(STORAGE_KEY, data);
});

//!=========================================

document.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS(STORAGE_KEY);

  if (data) {
    form.elements.name.value = data.name;
    form.elements.message.value = data.message;
  }
});

//!=========================================

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = loadFromLS(STORAGE_KEY);
  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
});

//!=========================================

function saveToLS(key, value) {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);

  try {
    const data = JSON.parse(json);
    return data;
  } catch (err) {
    console.log(err);
    return json;
  }
}
