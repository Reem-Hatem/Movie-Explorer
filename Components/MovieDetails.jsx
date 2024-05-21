import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MovieDetails = () => {
    const route = useRoute();
    const { movie } = route.params;
    console.log(movie)
    return (
        <View>
            <Text>{movie.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default MovieDetails;
