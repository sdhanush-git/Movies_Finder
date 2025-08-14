import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {options} from "../Utilitis/Options";
import Default from "../assets/Default.jpg";


const MovieDetails = () => {
  const params = useParams();

  const [data, setData] = useState({});

      const {
        original_title,
        poster_path,
        popularity,
        overview,
        release_date,
        vote_average,
        vote_count,
        genres,
      } = data;


      const image = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : Default;

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
        options
      );

      const MovieDetail = await response.json();

      setData(MovieDetail);
    }
    fetchDetails();
  }, []);


    useEffect(() => {
      document.title = `${original_title}/ CinemaBite`;
    });

  return (
    <main className="pt-24">
      <section className="relative bg-cover bg-center min-h-screen">
        <div className="relative z-10 flex justify-around flex-wrap py-5 text-Black  ">

          <div className="max-w-sm  bg-slate-600 mb-6">

            <img className="rounded " alt={original_title} src={image} />
          </div>

          <div className="max-w-2xl text-lg">
            <h5 className="text-4xl font-bold mb-5">{original_title}</h5>
            <p className="my-10">{overview}</p>

            <p className="flex flex-wrap gap-5 my-10">
              {genres
                ? genres.map((genre) => (
                    <span className="border border-purple-500 text-purple-500 px-4 py-2 rounded hover:bg-purple-700 hover:text-white">
                      {genre.name}
                    </span>
                  ))
                : ""}
            </p>
            <p className=" font-bold my-10"> Relese Date : {release_date}</p>
            <p className="">
              <span class=" bg-blue-100 text-blue-800 text-xs font-medium me-2 px-7 py-2 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                Popularity :  {popularity}
              </span>
              <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-7 py-2 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                Vote Average : {vote_average}
              </span>
              <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-7 py-2 rounded-sm dark:bg-red-900 dark:text-red-300">
                Vote Counts :{vote_count}
              </span>

            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MovieDetails;
