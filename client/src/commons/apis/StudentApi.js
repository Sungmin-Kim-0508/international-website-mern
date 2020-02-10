import axios from "axios";
import urls from "../components/urls";
import {
  PRODUCTION_URL,
  IS_PRODUCTION,
  DEVELOPMENT_URL
} from "./production_config";

const api = axios.create({
  baseURL: IS_PRODUCTION ? PRODUCTION_URL : `${DEVELOPMENT_URL}${urls.NEWS}`
});

const studentApi = {
  getAllFiles: async () => {
    try {
      const { data } = await api.get("");
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getPaginatedFiles: async (pageNum, limit) => {
    try {
      const { data } = await api.get("student-page", {
        params: {
          pageNum,
          limit
        }
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  uploadFile: async (formData, tokenConfig) => {
    const { headers } = tokenConfig;
    try {
      const { data } = await api.post(`${urls.UPLOAD}`, formData, {
        headers
      });
      return data;
    } catch (error) {
      console.log(error.response);
    }
  },
  deleteFile: async (id, userId, tokenConfig) => {
    const { headers } = tokenConfig;
    try {
      await api.post(
        `${id}${urls.FOR_STUDENTS_DELETE}`,
        { userId },
        { headers }
      );
    } catch (error) {
      console.error(error);
    }
  }
};

export default studentApi;
