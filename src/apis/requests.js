import axios from "axios";

export const PROXY_UNSPLASH_API = axios.create({
    baseURL: "https://api-proxy-server-6xbe.onrender.com/api/v1/images/search/"
});