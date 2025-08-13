import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams()

  const queryTerm = searchParams.get("q")

  const { data: movies } = useFetch(apiPath, queryTerm);

  // console.log(apiPath)
  return (
    <main>
      <section className="max-w-7xl max-auto py-7">
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
          {/* <p>Search Param</p> */}
        </div>
      </section>
    </main>
  );
};

export default Search;
