import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const moviesTopRatedAction = createAsyncThunk("get/getTopRated", async()=>{
    const movies = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=00f378e7895b0d9b5b8653e265d683e1");
    console.log(movies.data.results);
    return movies.data.results;
});
export const moviesUpComingAction = createAsyncThunk("get/getUpComing", async()=>{
    const movies = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=00f378e7895b0d9b5b8653e265d683e1");
    console.log(users.data);
    return movies.data;
});
export const moviesNowPlayingAction = createAsyncThunk("get/getNowPlaying", async()=>{
    const movies = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=00f378e7895b0d9b5b8653e265d683e1");
    console.log(movies.data);
    return movies.data;
});
export const moviesPopularAction = createAsyncThunk("get/getPopular", async()=>{
    const movies = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=00f378e7895b0d9b5b8653e265d683e1");
    console.log(movies.data);
    return movies.data;
});


const moviesSlice = createSlice({
    name: "movies",
    initialState: {movies: [], movie: {}},
    extraReducers: (builder)=>{
        builder.addCase(moviesTopRatedAction.fulfilled, (state, action)=>{
            state.movies = action.payload;
        });
        builder.addCase(moviesUpComingAction.fulfilled, (state, action)=>{
            state.movies = action.payload;
        });
        builder.addCase(moviesNowPlayingAction.fulfilled, (state, action)=>{
            state.movies = action.payload;
        });
        builder.addCase(moviesPopularAction.fulfilled, (state, action)=>{
            state.movies = action.payload;
        });
    }
});

export default moviesSlice.reducer;