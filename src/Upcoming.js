import api, { api_key } from "./axios";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";

const Upcoming = () => {
  const [data, setData] = useState([]);

  const apiUpcoming = api.request("movie/upcoming", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data.results);
    };
    data();
  }, []);

  console.log(data);
  return <MovieList data={data} />;
};

export default Upcoming;
