import { PAGE_SIZE, searchNews } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-functions';

//!=========================================

const formElem = document.querySelector('.js-search-form');
const ulElem = document.querySelector('.js-article-list');
const loadMoreBtn = document.querySelector('.js-btn-load');

//!=========================================

let query;
let currentPage;
let totalPages = 0;

//!=========================================

formElem.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  query = formData.get('query');
  currentPage = 1;

  const data = await searchNews(query, currentPage);

  totalPages = Math.ceil(data.totalResults / PAGE_SIZE);
  const markup = articlesTemplate(data.articles);
  ulElem.innerHTML = markup;

  checkBtnStatus();
  e.target.reset();
});

//!=========================================

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  checkBtnStatus();

  const data = await searchNews(query, currentPage);
  const markup = articlesTemplate(data.articles);
  ulElem.insertAdjacentHTML('beforeend', markup);
});

//!=========================================

function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('hidden');
}

function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('hidden');
}

function checkBtnStatus() {
  console.log(`${currentPage} >= ${totalPages}`);
  if (currentPage >= totalPages) {
    hideLoadMoreBtn();
  } else {
    showLoadMoreBtn();
  }
}

//!=========================================
