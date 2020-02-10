import axios from "axios";
import urls from "../components/urls";
import {
  IS_PRODUCTION,
  PRODUCTION_URL,
  DEVELOPMENT_URL
} from "./production_config";

const api = axios.create({
  baseURL: IS_PRODUCTION ? PRODUCTION_URL : `${DEVELOPMENT_URL}${urls.NEWS}`
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
