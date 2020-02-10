import axios from "axios";
import urls from "commons/__routes__";
import {
  IS_PRODUCTION,
  PRODUCTION_URL,
  DEVELOPMENT_URL
} from "./production_config";

const api = axios.create({
  baseURL: IS_PRODUCTION
    ? `${PRODUCTION_URL}/${urls.news}`
    : `${DEVELOPMENT_URL}${urls.news}`
});

const newsApi = {
  uploadNews: (title, description, _id, tokenConfig) => {
    const { headers } = tokenConfig;
    return api.post(
      urls.newsUpload,
      { title, description, _id },
      {
        headers
      }
    );
  },
  searchNews: (keyword, pageNum) => {
    return api.get(urls.search, {
      params: {
        pageNum,
        keyword: keyword
      }
    });
  },
  detailNews: id => {
    return api.get(id);
  },
  listNews: () => {
    return api.get("");
  },
  paginatedNews: (page, limit) => {
    return api.get(urls.newsPage, {
      params: {
        pageNum: page.toString(),
        limit
      }
    });
  },
  editNews: (id, title, description, tokenConfig) => {
    const { headers } = tokenConfig;
    return api.post(
      `${id}${urls.newsEdit}`,
      { title, description },
      { headers }
    );
  },
  deleteNews: (id, userId, tokenConfig) => {
    const { headers } = tokenConfig;

    return api.post(`${id}${urls.newsDelete}`, { userId }, { headers });
  }
};

export default newsApi;
