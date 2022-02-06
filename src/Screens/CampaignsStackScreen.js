import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Campaigns from './Campaigns';
import DetailsScreen from './DetailsScreen';

const SettingsStack = createStackNavigator();

function CampaignsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Guardians" component={Campaigns} options={{
          title: 'Dominos Guardians',
          headerStyle: {
            backgroundColor: '#14B351',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

export default CampaignsStackScreen();