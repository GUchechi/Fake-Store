import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  // removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";


const MovieDetail = () => {


  console.log(data)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    // return () => {
    //   dispatch(removeSelectedMovieOrShow());
    // };
  }, [dispatch, imdbID]);
  return ( 
    <div>MovieDetail</div>
  )
}

export default MovieDetail