import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { MaterialIcons } from '@expo/vector-icons'

import Home from './src/screen/Home';
import Search from './src/screen/Search';
import Videoplayer from './src/screen/Videoplayer';
import Explore from './src/screen/Explore';
import Suscribe from './src/screen/Suscribe';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const RootName = () => {
  return (
    
    <Tab.Navigator
   
    screenOptions=
    { 
          ({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = "home"
            } else if (route.name === 'explore') {
              iconName = "explore";
            } else if (route.name === 'suscribe') {
              iconName = 'unsubscribe';
            }


            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })
    }


    >
      <Tab.Screen name="home" component={Home}   options={{headerShown: false}}/>
      <Tab.Screen name="explore" component={Explore}  options={{headerShown: false}}/>
      <Tab.Screen name="suscribe" component={Suscribe}  options={{headerShown: false}}/>
    </Tab.Navigator>
    
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="rootName" component={RootName} />
        <Stack.Screen name='search' component={Search} />
        <Stack.Screen name='videoPlayer' component={Videoplayer} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


