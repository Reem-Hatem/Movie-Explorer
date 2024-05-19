import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MovieDetails = ({movie}) => {
    return (
        <View>
            <Text>{movie.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default MovieDetails;
