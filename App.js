// // App.js
// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import TopRatedMovies from './TopRatedMovies';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <TopRatedMovies />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

// export default App;











import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movies from './Components/Movies';
import { Provider } from 'react-redux';
import store from './Redux/store/store'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './Navigation/Drawer';
import MyStack from './Navigation/Stack';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MyStack></MyStack>
      {/* <DrawerNavigation></DrawerNavigation> */}
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
