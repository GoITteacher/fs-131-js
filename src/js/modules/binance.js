const refs = {
  formEl: document.querySelector('.js-binance-form'),
  infoEl: document.querySelector('.js-binance-info'),
};

//!=========================================

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const userValue = formData.get('query');

  getPrice(userValue).then(data => {
    const markup = symbolTemplate(data);
    refs.infoEl.innerHTML = markup;
  });
});

//!=========================================

function getPrice(userValue) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const params = new URLSearchParams({
    symbol: userValue,
  });
  const url = BASE_URL + END_POINT + '?' + params;

  const options = {
    headers: {
      'x-rapidapi-key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'x-rapidapi-host': 'binance43.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

//!=========================================

function symbolTemplate(obj) {
  const icon = obj.symbol.toLowerCase().replace('usdt', '');
  obj.price = Number(obj.price).toFixed(2);
  return `
  <img
      class="coin-logo"
      src="https://assets.coincap.io/assets/icons/${icon}@2x.png"
    />
  <span class="coin-title">${obj.symbol}</span>
  <span class="coin-price">${obj.price}</span>`;
}
