import React from 'react'
import { useState,useEffect } from 'react';

const useFetch = (apiPath, queryTerm="") => {

  const [data, setData] = useState([])

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzQ0ZmQ2OWZlNTgzYzk5ZGFhMTM3NDVmZjUwN2U2NSIsIm5iZiI6MTc1NDg5NDQ1Ni43NDQsInN1YiI6IjY4OTk5MDc4ODlmYThiMGEwNTI2N2VkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sI3MH08Bvwf1oUUMziOcNCyOnnbFDQnA0TaLXcVDwQU",
    },
  };

  useEffect(() => {

    async function fetchMovies() {

      const response = await fetch(
        `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`,
        options
      );

      const data = await response.json();

      setData(data.results);
    }
    fetchMovies();
  }, [apiPath]);

  return {data};
}

export default useFetch