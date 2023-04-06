import { API_DATA } from "./constant.js";
const params = {
  api_key: API_DATA.key,
  sort_by: API_DATA.sort,
  page: API_DATA.page,
  query: `guardian`,
};
const getMovie = async () => {
  //   params.query = "guardian";
  const ress = await fetch(API_DATA.url + new URLSearchParams(params));
  const data = await ress.json();
  console.log(params);

  console.log(data);
};
