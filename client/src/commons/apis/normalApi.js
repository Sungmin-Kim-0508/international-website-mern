import axios from "axios";
import { PRODUCTION_URL } from "./production_config"

const api = axios.create({
  baseURL:
    process.env.REACT_APP_IS_PRODUCTION === "true"
      ? PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL
});

export const normalApi = {
  registerView: id => {
    // console.log(id);
    return api.post(`${id}/view`);
  }
};
