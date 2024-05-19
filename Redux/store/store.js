import moviesSlice from "../slices/moviesSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer:{
        movies: moviesSlice,
    }
})
export default store;