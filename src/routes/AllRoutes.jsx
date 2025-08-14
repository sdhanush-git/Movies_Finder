import { Route, Routes } from "react-router-dom";
import { MoviesList, MovieDetails, NotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MoviesList apiPath="movie/now_playing" head=" Home " />}
      />

      <Route
        path="/movie/:id"
        element={<MovieDetails apiPath="movie/movie_id" />}
      />

      <Route
        path="/movies/popular"
        element={<MoviesList apiPath="movie/popular" head=" Popular " />}
      />

      <Route
        path="/movies/top"
        element={<MoviesList apiPath="movie/top_rated" head=" Top_Rated " />}
      />

      <Route
        path="/movies/upcoming"
        element={<MoviesList apiPath="movie/upcoming" head="Upcoming " />}
      />

      <Route path="search" element={<Search apiPath="search/movie" />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
