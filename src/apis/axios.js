import axios from 'axios';

export const UNSPLASH_API = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization : `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
    }
});
