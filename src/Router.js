import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Screens/Profile';
import HomeScreen from './Screens/HomeScreen';
import Campaigns from './Screens/Campaigns';
import DetailsScreen from './Screens/DetailsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AnaSayfa" component={HomeScreen} />       
        <Tab.Screen name="Kampanyalar" component={Campaigns} />
        <Tab.Screen name="Profilim" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}