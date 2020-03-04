import axios from "axios";
import urls from "../components/urls";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_IS_PRODUCTION === "true"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL
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
