import axios from "axios";
import urls from "commons/__routes__";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_IS_PRODUCTION === "true"
      ? `${process.env.REACT_APP_PRODUCTION_URL}/${urls.news}`
      : `${process.env.REACT_APP_DEVELOPMENT_URL}${urls.news}`
});

/**
 * _id: user id
 */
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
