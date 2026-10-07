let colorPalette = [];

const LENGTH = 100;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();
//!=========================================

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};

//!=========================================

document.addEventListener('DOMContentLoaded', () => {
  const markup = colorsTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
});

refs.btnReloadColor.addEventListener('click', () => {
  createPaletteItems();
  const markup = colorsTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
});

//!=========================================

refs.itemList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const btn = e.target;
  const color = btn.dataset.color;

  refs.modalElement.style.backgroundColor = color;
  showModal();
});

function showModal() {
  refs.backdropElem.classList.remove('hidden');
}

function hideModal() {
  refs.backdropElem.classList.add('hidden');
}

//!=========================================

refs.backdropElem.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    hideModal();
  }
});

//!=========================================
function colorTemplate(obj) {
  return `<li class="color-item">
          <button data-color="${obj.hex}" class="color-body" style="background-color: ${obj.hex}"></button>
          <div class="color-footer">
            <div>HEX: ${obj.hex}</div>
            <div>RGB: ${obj.rgb}</div>
            <div></div>
          </div>
        </li>`;
}

function colorsTemplate(arr) {
  return arr.map(colorTemplate).join('');
}

//!=========================================

/* 
<li class="color-item">
    <button class="color-body" style="background-color:...;"></button>
    <div class="color-footer">
        <div>HEX: ....</div>
        <div>RGB: ....</div>
        <div></div>
    </div>
</li>

*/
