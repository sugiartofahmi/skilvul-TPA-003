import { API_KEY } from "./apikey.js";
export const API_DATA = {
  key: API_KEY,
  url: `https://api.themoviedb.org/3/`,
  sort: `popularity.desc`,
  page: 1,
  endpoint: {
    discover: "discover/movie?",
    search: "search/movie?",
  },
};
