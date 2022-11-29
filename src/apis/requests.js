import axios from "axios";

export const PROXY_UNSPLASH_API = axios.create({
    baseURL: "https://api-proxy-server.up.railway.app/api/v1/images/search/"
});