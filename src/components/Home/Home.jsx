import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../apis/movieApi";
import { APIKey } from "../../apis/MovieApiKey";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch(); 

  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
    
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
