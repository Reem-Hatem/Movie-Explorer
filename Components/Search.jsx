import * as React from 'react';
import { Searchbar, Menu } from 'react-native-paper';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useState } from 'react';
import { SelectCountry } from 'react-native-element-dropdown';
import styles from '../styles/style'
import { filterMovies, moviesNowPlayingAction, moviesPopularAction, moviesTopRatedAction, moviesUpComingAction } from '../Redux/slices/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';


const SelectMovieType = _props => {
    const [movieType, setMovieType] = useState('1');
    const [searchQuery, setSearchQuery] = React.useState('');
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (movieType === '1') {
            dispatch(moviesPopularAction());
        }
        else if (movieType === '2') {
            dispatch(moviesNowPlayingAction());
        }
        else if (movieType === '3') {
            dispatch(moviesTopRatedAction());
        }
        else if (movieType === '4') {
            dispatch(moviesUpComingAction());
        }

    }, [movieType])


    const moviesTypes = [
        {
            value: '1',
            lable: 'Popular',
        },
        {
            value: '2',
            lable: 'Playing Now',
        },
        {
            value: '3',
            lable: 'Top rated',
        },
        {
            value: '4',
            lable: 'Up Coming',
        },
    ];


    function changeMovies(val) {
        setSearchQuery(val);

        const lowercasedQuery = val.toLowerCase();
        const filtered = movies.filter(movie =>
            movie.title.toLowerCase().includes(lowercasedQuery)
        );
        dispatch(filterMovies(filtered));

    }

    return (
        <View style={{ flexDirection: 'row', width: '100%', marginTop: 3 }}>
            <Searchbar
                style={{ flex: 3 }}
                placeholder="Search"
                onChangeText={changeMovies}
                value={searchQuery}
            />

            <SelectCountry
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.placeholderStyle}
                maxHeight={200}
                value={movieType}
                data={moviesTypes}
                valueField="value"
                labelField="lable"
                placeholder="Filter"
                onChange={e => {
                    setMovieType(e.value);
                }}
            />

        </View>

    );
};

export default SelectMovieType;
