// created constants for api links
export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmYxOTg3ZTQwNDdlYWYzNjFjMGJkNWE1ZmIyYzJjYiIsInN1YiI6IjY1MmJhMzM3MDI0ZWM4MDBhZWNiYzRmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H89XzAJDmJtsvODXTyBIzHryxaLDyJSJyjL8uqWQow4",
  },
};

export const NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?&page=1";
export const POPULAR = "https://api.themoviedb.org/3/movie/popular?&page=1";
export const TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?&page=1";
export const UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?&page=1";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
