import axios from 'axios';

export const goitServer = axios.create({
  baseURL: 'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com',
  headers: { MY_GOIT_API_KEY: 'HELLO API KEY' },
  params: { apiKey: '*********' },
});

export const newsApiServer = axios.create({
  baseURL: 'https://newsapi.org',
  headers: { 'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7' },
});
