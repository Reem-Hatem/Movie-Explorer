import React from 'react';
import { StyleSheet, View } from 'react-native';
import Movies from '../Components/Movies';
import SelectMovieType from '../Components/Search';

const Home = () => {
    return (
        <View>
            <SelectMovieType></SelectMovieType>
            <Movies></Movies>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
