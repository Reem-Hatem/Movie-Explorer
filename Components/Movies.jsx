import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { moviesTopRatedAction } from '../Redux/slices/moviesSlice';
import Movie from './Movie';

const Movies = () => {
    const movies = useSelector(state => state.movies.filteredMovies);
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(moviesTopRatedAction());
    },[])
    return (
        <ScrollView>
            {movies.map((m)=> <Movie key={m.id} {...m}></Movie>)}
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Movies;
