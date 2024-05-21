import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '../utils/routes';
import Home from '../Pages/HomePage';
import MovieDetails from '../Components/MovieDetails';
import DrawerNavigation from './Drawer';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.drawer} component={DrawerNavigation} options={{headerShown:false}}></Stack.Screen>
      {/* <Stack.Screen name={routes.home} component={Home} options={{ headerShown: false }} />
      <Stack.Screen name={routes.details} component={MovieDetails}></Stack.Screen> */}
      <Stack.Screen name={routes.details} component={MovieDetails}></Stack.Screen>
    </Stack.Navigator>
  );
}
export default MyStack;