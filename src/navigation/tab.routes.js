import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

import Styles from '../global/style.json'

import Books from '../screens/Books';
import Search from '../screens/Search'
import Groups from '../screens/Groups'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          headerShown: false,
          tabBarStyle: {
            paddingHorizontal: 15,
            backgroundColor: Styles.colors.ligthTheme.background,
          },
        }}
    >
      <Tab.Screen 
        name="Books"
        component={Books}
        options={{
            tabBarLabel: 'Livros',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="book-open-variant" color={"#32435F"} size={35} />
            ),
        }}
      />

      <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
            tabBarLabel: 'Busca',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="magnify" color={"#32435F"} size={35} />
            ),
        }}
      />

      <Tab.Screen 
        name="Groups" 
        component={Groups} 
        options={{
            tabBarLabel: 'Grupos',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-multiple-outline" color={"#32435F"} size={35} />
            ),
        }}
      />

      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
            tabBarLabel: 'Perfil',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-outline" color={"#32435F"} size={35} />
            ),
        }}
      />

    </Tab.Navigator>
  );
}