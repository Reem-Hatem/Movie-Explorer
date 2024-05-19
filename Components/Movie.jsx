import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Movie = (movie) => {
    // console.warn(movie)
    return (
        <View>
            <Text>{movie.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Movie;
