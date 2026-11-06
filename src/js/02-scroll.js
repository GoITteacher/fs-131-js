import { PAGE_SIZE, searchNews } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-functions';

//!=========================================

const formElem = document.querySelector('.js-search-form');
const ulElem = document.querySelector('.js-article-list');
const target = document.querySelector('.js-target');

//!=========================================

let query;
let currentPage; // 1
let totalPages = 0; // 10

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

  checkObserverStatus();
  e.target.reset();
});

//!=========================================

const loadMore = async () => {
  currentPage += 1;
  checkObserverStatus();

  const data = await searchNews(query, currentPage);
  const markup = articlesTemplate(data.articles);
  ulElem.insertAdjacentHTML('beforeend', markup);
};

//!=========================================

function checkObserverStatus() {
  console.log(`${currentPage} >= ${totalPages}`);
  if (currentPage >= totalPages) {
    observer.unobserve(target);
  } else {
    observer.observe(target);
  }
}

//!=========================================

const observer = new IntersectionObserver(
  arr => {
    const elem = arr[0];

    if (elem.isIntersecting) {
      loadMore();
    }
  },
  { rootMargin: '1000px' },
);
