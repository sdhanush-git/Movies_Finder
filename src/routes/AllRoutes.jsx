import { Route, Routes } from "react-router-dom";
import { MoviesList, MovieDetails, NotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/movies/popular" element={<MoviesList />} />
      <Route path="/movies/top" element={<MoviesList />} />
      <Route path="/movies/upcoming" element={<MoviesList />} />
      <Route path="search" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
