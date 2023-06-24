import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";
import { apiKey } from "../../api/apiKey";

export const fetchAsyncMovie = createAsyncThunk(
  "movies/fetchAsyncMovie",
  async (serach) => {
    const response = await movieApi.get(
      `?apikey=${apiKey}&s=${serach}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (search) => {
    const response = await movieApi.get(
      `?apikey=${apiKey}&s=${search}&type=series`
    );
    return response.data;
  }
);

export const fetchDetail = createAsyncThunk("movies/fetchDetail", async(id) => {
  const response = await movieApi.get(`?apikey=${apiKey}&i=${id}&Plot=full`)
  return response.data
})

const initialState = {
  movies: {},
  shows: {},
  selectedDetail: {},
  isLoading: false
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedDetail: (state) => {
      state.selectedDetail = {}
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAsyncMovie.pending, (state) => {
        state.isLoading = !state.isLoading
      })
      .addCase(fetchAsyncMovie.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = !state.isLoading
      })
      .addCase(fetchAsyncMovie.rejected, () => {
        console.log("rejected");
      })
      .addCase(fetchAsyncShows.fulfilled, (state, action) => {
        state.shows = action.payload;
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.selectedDetail = action.payload
      })
});

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetail = (state) => state.movies.selectedDetail;

export const { removeSelectedDetail } = moviesSlice.actions;
export default moviesSlice.reducer;
