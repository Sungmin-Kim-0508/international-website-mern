import axios from "axios";
import routes from "commons/__routes__";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_IS_PRODUCTION === "true"
      ? `${process.env.REACT_APP_PRODUCTION_URL}${routes.forStudents}`
      : `${process.env.REACT_APP_DEVELOPMENT_URL}${routes.forStudents}`
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
      const { data } = await api.get(routes.studentPage, {
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
      const { data } = await api.post(`${routes.upload}`, formData, {
        headers
      });
      return data;
    } catch (error) {
      console.log(error.response);
    }
  },
  downloadFile: async fileUrl => {
    try {
      await api.post(`${routes.download}`, { fileUrl });
    } catch (error) {
      console.error(error);
    }
  },
  deleteFile: async (id, userId, tokenConfig) => {
    const { headers } = tokenConfig;
    try {
      await api.post(`${id}${routes.delete}`, { userId }, { headers });
    } catch (error) {
      console.error(error);
    }
  }
};

export default studentApi;
