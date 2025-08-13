import { Route, Routes } from "react-router-dom";
import { MoviesList, MovieDetails, NotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesList apiPath="movie/now_playing" />} />

      <Route path="/movie/:id" element={<MovieDetails />} />

      <Route
        path="/movies/popular"
        element={<MoviesList apiPath="movie/popular" />}
      />

      <Route
        path="/movies/top"
        element={<MoviesList apiPath="movie/top_rated" />}
      />

      <Route
        path="/movies/upcoming"
        element={<MoviesList apiPath="movie/upcoming" />}
      />

      <Route path="search" element={<Search apiPath="search/movie" />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
