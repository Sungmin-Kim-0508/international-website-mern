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

export const normalApi = {
  registerView: id => {
    // console.log(id);
    return api.post(`${id}/view`);
  }
};
