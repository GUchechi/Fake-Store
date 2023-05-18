import { createSlice, createAsyncThunk } from "@reduxj s/toolkit";

const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const response = await movieApi
  .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
  .catch((err) => {
    console.log("Err:", err);
  });
  dispatch(addMovies(response.data))
})


const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState, 
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
