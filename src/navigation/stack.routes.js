import { createStackNavigator } from '@react-navigation/stack';

import InitialPage from '../screens/initialPage';

import ProfileMain from '../screens/Profile';
import ProfileConfiguration from '../screens/Profile/configurations'

import BooksHome from '../screens/Books';
import BooksList from '../screens/Books/booksList'

import TabRoutes from './tab.routes';


const Stack = createStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator
    initialRouteName="InitialPage"
    >
        {/* Tab Navigator */}
        <Stack.Screen
          name="Tab"
          component={TabRoutes}
          options={{
            title: ' ',
            headerShown: false,
            headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
        }}
        />

        {/* Page to chose login or create account */}
        <Stack.Screen
            name="InitialPage" 
            component={InitialPage} 
            options={{
                title: 'Initial Page',
                headerShown: false,
                headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
            }}
        />

        {/* Stack profile */}
        <Stack.Screen
            name="ProfileMain"
            component={ProfileMain}
            options={{
                title: 'Home Profile',
                headerShown: false,
                headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
            }}
        />

        <Stack.Screen
            name="ProfileConfiguration"
            component={ProfileConfiguration}
            options={{
                title: '',
                //headerShown: false,
                headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
            }}
        />

        {/* Stack books */}
        <Stack.Screen
            name="BooksHome"
            component={BooksHome}
            options={{
                title: 'Home Profile',
                headerShown: false,
                headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
            }}
        />

        <Stack.Screen
            name="BooksList"
            component={BooksList}
            options={{
                title: '',
                //headerShown: false,
                headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
            }}
        />

    </Stack.Navigator>
  );
}

export { StackRoutes };