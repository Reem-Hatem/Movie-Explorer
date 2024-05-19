import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { moviesTopRatedAction } from '../Redux/slices/moviesSlice';
import Movie from './Movie';

const Movies = () => {
    const movies = useSelector(state => state.movies.movies);
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(moviesTopRatedAction());
    },[])
    return (
        <View>
            {movies.map((m)=> <Movie key={m.id} {...m}></Movie>)}
        </View>
    );
}

const styles = StyleSheet.create({})

export default Movies;
