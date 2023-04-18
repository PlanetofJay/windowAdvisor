import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen from '../Screens/LoadingScreen';
import HomeScreen from '../Screens/HomeScreen';
import CreateTemplate from '../Screens/CreateTemplate';
import Template from '../Screens/Template';
import InfoScreen from '../Screens/InfoScreen';
import Settings from '../Screens/SettingsScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, headerTitleAlign: 'center'}}/>
        <Stack.Screen name="CreateTemplate" component={CreateTemplate} options={{ title: 'Create Template', headerTitleAlign: 'center', headerTintColor: '#fff', headerStyle: {backgroundColor: '#916306'}}}/>
        <Stack.Screen name="Template" component={Template} options={{ title: 'Choose Background', headerTitleAlign: 'center' , headerTintColor: '#fff', headerStyle: {backgroundColor: '#916306'}}} />
        <Stack.Screen name="Info" component={InfoScreen} options={{ title: 'Information', headerTitleAlign: 'center', headerTintColor: '#fff', headerStyle: {backgroundColor: '#916306'}}}/>     
        <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings', headerTitleAlign: 'center', headerTintColor: '#fff', headerStyle: {backgroundColor: '#916306'}}}/>     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;