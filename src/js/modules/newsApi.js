import { newsApiServer } from './serverConfig';

export const getArticles = async () => {
  const res = await newsApiServer.get('');
};
