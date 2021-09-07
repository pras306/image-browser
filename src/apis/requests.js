import axios from "axios";

export const PROXY_UNSPLASH_API = axios.create({
    baseURL: "https://backend-portfolio-proxy.herokuapp.com/api/v1/images/search/"
});