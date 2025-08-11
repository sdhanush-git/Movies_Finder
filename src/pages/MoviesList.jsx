import { useState, useEffect } from "react";
import Card from "../components/Card";

const MoviesList = () => {

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzQ0ZmQ2OWZlNTgzYzk5ZGFhMTM3NDVmZjUwN2U2NSIsIm5iZiI6MTc1NDg5NDQ1Ni43NDQsInN1YiI6IjY4OTk5MDc4ODlmYThiMGEwNTI2N2VkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sI3MH08Bvwf1oUUMziOcNCyOnnbFDQnA0TaLXcVDwQU",
    },
  };

  const dummyMovies = new Array(6).fill(null)

  const [movies, setMovies] = useState([])

  useEffect(()=>{
    async function fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );

      const data = await response.json();

      setMovies(data.results);

    }
    fetchMovies();

},[])

  return (
    <main>
      <section className="max-w-7xl max-auto py-7">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {
          dummyMovies.map((_, index) =>(
            <Card key={index}/>
          ))
          }
        </div>
      </section>
    </main>
  );
};

export default MoviesList;
