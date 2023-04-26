import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "../Layouts/AppLayout";
import { Home } from "../pages/Home";
import { Movie } from "../pages/Movie";
import { FavoriteMovies } from "../pages/FavoriteMovies";
import NotFound from "../components/NotFound";

export default function () {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/favoriteMovies/movie/:id" element={<Movie />} />
        <Route path="/favoriteMovies" element={<FavoriteMovies />} />
      </Route>
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
