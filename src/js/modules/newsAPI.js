import axios from 'axios';

export const PAGE_SIZE = 5;
export const searchNews = async (query, currentPage) => {
  const BASE_URL = 'https://newsapi.org';
  const END_POINT = '/v2/everything';
  const url = BASE_URL + END_POINT;

  const params = {
    q: query,
    pageSize: PAGE_SIZE,
    page: currentPage,
  };

  const headers = {
    'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7',
  };

  const res = await axios.get(url, { params, headers });
  return res.data;
};
