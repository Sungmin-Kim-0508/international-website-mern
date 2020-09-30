import axios from "axios";
import { PRODUCTION_URL } from "./production_config"

const api = axios.create({
  baseURL:
    process.env.REACT_APP_IS_PRODUCTION === "true"
      ? PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL
});
const videoApi = {
  listVideo: () => {
    return api.get("");
  },

  uploadVideo: (file, title, description) => {
    const formData = new FormData();
    formData.append("videoFile", file);
    formData.append("title", title);
    formData.append("description", description);
    return api.post(`upload`, formData);
  },
  videoDetail: id => {
    return api.get(id);
  },
  editVideo: (id, title, description) => {
    return api.post(`${id}/edit`, {
      id,
      title,
      description
    });
  },
  deleteVideo: id => {
    return api.post(`${id}/delete`, { id });
  },
  searchVideo: keyword => {
    return api.get(`search/videos`, {
      params: {
        keyword: encodeURIComponent(keyword)
      }
    });
  }
};

export default videoApi;
