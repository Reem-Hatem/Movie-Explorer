import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import routes from '../utils/routes';
import Home from '../Pages/HomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetails from '../Components/MovieDetails';
import MyStack from './Stack';
import Favorites from '../Components/Favorites';
const drawer = createDrawerNavigator()
const stack = createNativeStackNavigator();

const DrawerNavigation = () => {
    return (
        <drawer.Navigator>
            {/* <drawer.Screen name={routes.home} component={MyStack}></drawer.Screen>

            <drawer.Screen name={routes.home} component={Home}></drawer.Screen> */}
            <drawer.Screen name={routes.home} component={Home} />
      <drawer.Screen name={routes.fav} component={Favorites}></drawer.Screen>




        </drawer.Navigator>
    );
}


export default DrawerNavigation;
