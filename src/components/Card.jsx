import { Link } from "react-router-dom";
import BackUp from "../assets/Default.jpg"
import useFetch from "../hooks/useFetch";

const Card = ({movie}) => {
 
  const { id, original_title, poster_path, overview } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : BackUp; 


  return (
    <Link to={`/movie/${id}`}>
      <div>
        <div className="flex flex-col bg-slate-800 rounded-lg overflow-hidden h-[600px]  shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="h-45 w-full object-cover rounded-t-lg overflow-hidden"
            src={image}
            alt=""
          />

          <div className="p-5">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {original_title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
              {overview}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card