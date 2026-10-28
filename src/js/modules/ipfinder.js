const refs = {
  formEl: document.querySelector('.js-location-form'),
  cardInfo: document.querySelector('.js-ip-form'),
};

//!=========================================

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userIp = formData.get('userip');

  fetchIpInfo(userIp).then(data => {
    const markup = ipTemplate(data);
    refs.cardInfo.innerHTML = markup;
  });
});

//!=========================================

function fetchIpInfo(userIp) {
  const BASE_URL = 'https://ipwho.is';
  const END_POINT = `/${userIp}`;
  const url = BASE_URL + END_POINT;

  return fetch(url).then(res => res.json());
}

//!=========================================
function ipTemplate(obj) {
  const {
    country,
    ip,
    city,
    region,
    flag,
    currency,
    timezone,
    latitude,
    longitude,
    connection,
  } = obj;

  const markup = `
    <div class="info-item">
      ${
        flag?.img
          ? `
            <img
              class="flag"
              src="${flag.img}"
              alt="Flag of ${country}"
            />
          `
          : ''
      }

      <span class="info-label">Country:</span>
      <span class="info-value">
        ${country ?? 'Unknown'}
      </span>
    </div>

    <div class="info-item">
      <span class="info-label">IP Address:</span>
      <span class="info-value">
        ${ip ?? 'Unknown'}
      </span>
    </div>

    <div class="info-item">
      <span class="info-label">City:</span>
      <span class="info-value">
        ${city ?? 'Unknown'}
      </span>
    </div>

    <div class="info-item">
      <span class="info-label">Region:</span>
      <span class="info-value">
        ${region ?? 'Unknown'}
      </span>
    </div>

    <div class="info-item">
      <span class="info-label">Timezone:</span>
      <span class="info-value">
        ${timezone?.id ?? 'Unknown'}
      </span>
    </div>

    <div class="info-item">
      <span class="info-label">UTC:</span>
      <span class="info-value">
        ${timezone?.utc ?? 'Unknown'}
      </span>
    </div>

    <div class="info-item">
      <span class="info-label">Currency:</span>
      <span class="info-value">
        ${
          currency
            ? `${currency.name} (${currency.code}) ${currency.symbol}`
            : 'Not available'
        }
      </span>
    </div>

    <div class="info-item">
      <span class="info-label">Currency Rate:</span>
      <span class="info-value">
        ${
          currency?.exchange_rate != null
            ? `${currency.exchange_rate} ${currency.code} / USD`
            : 'Not available'
        }
      </span>
    </div>

    <div class="info-item">
      <span class="info-label">ISP:</span>
      <span class="info-value">
        ${connection?.isp ?? 'Unknown'}
      </span>
    </div>

    <div class="info-item">
      <span class="info-label">Google Maps:</span>

      ${
        latitude != null && longitude != null
          ? `
            <a
              href="https://www.google.com/maps?q=${latitude},${longitude}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="info-value">Open map</span>
            </a>
          `
          : '<span class="info-value">Unknown</span>'
      }
    </div>
  `;

  return markup;
}
