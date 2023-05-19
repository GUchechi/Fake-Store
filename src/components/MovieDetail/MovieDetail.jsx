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
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  console.log(data)

 
  return ( 
    <div>MovieDetail</div>
  )
}

export default MovieDetail