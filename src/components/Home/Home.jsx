import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../apis/movieApi";
import { APIKey } from "../../apis/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err:", err);
        });
        console.log("THE response from API", response)
    };
    fetchMovies()
  },[]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
