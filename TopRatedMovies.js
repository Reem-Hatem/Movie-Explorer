// // TopRatedMovies.js
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
// import axios from 'axios';

// const TopRatedMovies = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.themoviesdb.org/3/movie/top_rated',
//           {
//             params: {
//               api_key: 'YOUR_API_KEY', // replace with your actual API key
//             },
//           }
//         );
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={movies}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.movieItem}>
//             <Image
//               source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
//               style={styles.image}
//             />
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.rating}>Rating: {item.vote_average}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   movieItem: {
//     marginBottom: 20,
//   },
//   image: {
//     width: '100%',
//     height: 300,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   rating: {
//     fontSize: 16,
//     color: 'gray',
//   },
// });

// export default TopRatedMovies;
