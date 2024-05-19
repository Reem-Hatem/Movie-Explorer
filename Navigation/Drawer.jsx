import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import routes from '../utils/routes';
import Home from '../Pages/HomePage';
const drawer= createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <drawer.Navigator>
            <drawer.Screen name={routes.home} component={Home}></drawer.Screen>
            {/* <drawer.Screen name={routes.home} component={Home}></drawer.Screen> */}
        
        </drawer.Navigator>
    );
}


export default DrawerNavigation;
