import { API_DATA } from "./constant.js";

console.log(dayjs("2019-01-25").format("MMM DD, YYYY"));
const params = {
  api_key: API_DATA.key,
  sort_by: API_DATA.sort,
  page: API_DATA.page,
};
const search = document.getElementById("search");
const content = document.getElementById("grid_layout");
let ress, data, result;

search,
  addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      getMovie();
    }
  });

const getMovie = async () => {
  try {
    if (!search.value) {
      ress = await fetch(
        API_DATA.url + API_DATA.endpoint.discover + new URLSearchParams(params)
      );
    } else {
      params.query = search.value;
      ress = await fetch(
        API_DATA.url + API_DATA.endpoint.search + new URLSearchParams(params)
      );
    }
    data = await ress.json();
    result = await data.results
      .map(
        (
          el,
          i
        ) => `<section class="col-12 col-md-6 col-lg-4" id="container_card" key=${i}>
    <section class="card  ">
      <section class="ratio ratio-1x1 object-fit-scale ">
        <img
          src=${
            el.poster_path
              ? `https://image.tmdb.org/t/p/w500${el.poster_path}`
              : `https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg`
          }
          alt=""
          class=" "
        />
      </section>
      <section
        id="card_body"
        class="card-body border border-2 d-flex flex-column justify-content-between"
      >
        <section class="d-flex justify-content-between ">
          <p class="card-title w-75">${el.original_title}</p>
          <p class="card-title fw-bold">${el.vote_average}</p>
        </section>
        <p class="card-text">${`${dayjs(el.release_date).format(
          "MMM DD| YYYY"
        )}`}</p>
      </section>
    </section>
  </section>`
      )
      .join()
      .replace(/\,/gi, "");
    content.innerHTML = result.replace(/\|/gi, ",");
  } catch (error) {
    console.log(error);
  }
};

getMovie();
