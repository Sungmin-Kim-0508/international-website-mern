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

const studentApi = {
  getAllFiles: async () => {
    try {
      const { data } = await api.get();
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getPaginatedFiles: async (pageNum, limit) => {
    try {
      const { data } = await api.get(`${urls.VOLUNTEER_PAGE}`, {
        params: {
          pageNum: pageNum.toString(),
          limit
        }
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  uploadFile: async (formData, tokenConfig) => {
    const { headers } = tokenConfig;
    try {
      return await api.post(`${urls.UPLOAD}`, formData, {
        headers
      });
    } catch (error) {
      console.log(error.response);
    }
  },
  deleteFile: async (id, userId, tokenConfig) => {
    const { headers } = tokenConfig;
    try {
      return await api.post(
        `${id}${urls.FOR_VOLUNTEERS_DELETE}`,
        { userId },
        {
          headers
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
};

export default studentApi;
