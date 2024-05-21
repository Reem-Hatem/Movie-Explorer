import * as React from 'react';
import { Pressable } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import MovieDetails from './MovieDetails';
import { useNavigation } from '@react-navigation/native';
import routes from '../utils/routes';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Movie = (movie) => {
    const navigation = useNavigation();
    
    // console.warn(movie)
    return (
        <Card>
            <Card.Content>
                <Text variant="titleLarge">{movie.title}</Text>
            </Card.Content>
            <Pressable onPress={()=>navigation.navigate(routes.details, { movie: movie })}>
            <Card.Cover source={{ uri: "https://image.tmdb.org/t/p/w500/" + movie.poster_path }}
            style={{objectFit:"contain"}} />
            </Pressable>
            {/* <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions> */}
        </Card>
    );
}

export default Movie;
