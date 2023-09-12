import { createStackNavigator } from '@react-navigation/stack';

import InitialPage from '../screens/initialPage';
import Login from '../screens/Login';
import PasswordRecover from '../screens/Login/passwordRecover'
import SignInAccountData from '../screens/Login/SignInAccountData'
import SignInUserData from '../screens/Login/SignInUserData';
import AdditionalData from '../screens/Login/AdditionalData';

import ProfileMain from '../screens/Profile';
import ProfileConfiguration from '../screens/Profile/configurations'

import BooksHome from '../screens/Books';
import BooksList from '../screens/Books/booksList'

import TabRoutes from './tab.routes';

import Styles from '../global/style.json'


const Stack = createStackNavigator();

// Not logged
function LoginRoutes() {
    return (
      <Stack.Navigator
      initialRouteName="InitialPage"
      screenOptions={{
        headerStyle: { backgroundColor: Styles.colors.ligthTheme.background }, // Header color
        headerTintColor: Styles.colors.ligthTheme.primary, // Header text color
      }}
      >  
          {/* Page to chose login or create account */}
          <Stack.Screen
              name="InitialPage" 
              component={InitialPage} 
              options={{
                  title: ' ',
                  headerShown: false,
                  headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
              }}
          />
  
          <Stack.Screen
              name="Login" 
              component={Login} 
              options={{
                  title: 'Initial Page',
                  headerShown: false,
                  headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
              }}
          />

            <Stack.Screen
              name="PasswordRecover" 
              component={PasswordRecover} 
              options={{
                  title: ' ',
                  //headerShown: false,
                  headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
              }}
          />

            <Stack.Screen
                name="SignInAccountData" 
                component={SignInAccountData} 
                options={{
                    title: ' ',
                    headerShown: false,
                    headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
                }}
          />

            <Stack.Screen
                name="SignInUserData" 
                component={SignInUserData} 
                options={{
                    title: ' ',
                    headerShown: false,
                    headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
                }}
          />

            <Stack.Screen
                name="AdditionalData" 
                component={AdditionalData} 
                options={{
                    title: ' ',
                    headerShown: false,
                    headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
                }}
          />
  
      </Stack.Navigator>
    );
  }

//   Logged
function StackRoutes() {
  return (
    <Stack.Navigator
    initialRouteName="InitialPage"
    screenOptions={{
        headerStyle: { backgroundColor: Styles.colors.ligthTheme.background }, // Header color
        headerTintColor: Styles.colors.ligthTheme.primary, // Header text color
      }}
    >
        {/* Tab Navigator */}
        <Stack.Screen
          name="Loged"
          component={TabRoutes}
          options={{
            title: ' ',
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
                title: 'Configurações',
                headerTitleAlign: 'center',
                //headerShown: false,
                headerTitleStyle: { 
                    fontWeight: 'bold', 
                    textAlign: 'center'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 5,
                }
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
                title: 'Livros',
                headerTitleAlign: 'center',
                //headerShown: false,
                headerTitleStyle: { 
                    fontWeight: 'bold', 
                    textAlign: 'center'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 5,
                }
            }}
        />

    </Stack.Navigator>
  );
}

export { LoginRoutes, StackRoutes };