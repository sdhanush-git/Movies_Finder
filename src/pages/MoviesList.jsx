import { useEffect } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";


const MoviesList = ({apiPath ,head}) => {


  const {data:movies} = useFetch(apiPath);
  
  useEffect (()=>{
    document.title = `${head}/ CinemaBite`;
  })

  return (
    
    <main>
      
      <section className="max-w-7xl max-auto py-7">
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {
            movies.map((movie)=>(
              <Card key={movie.id} movie ={movie}/>
            ))
          }
        </div>
      </section>
    </main>
  );
};

export default MoviesList;
