import * as React from 'react';
import { Pressable } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import MovieDetails from './MovieDetails';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Movie = (movie) => {
    // console.warn(movie)
    return (
        <Card>
            <Card.Content>
                <Text variant="titleLarge">{movie.title}</Text>
            </Card.Content>
            <Pressable onPress={()=><MovieDetails movie={movie}></MovieDetails>}>
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
