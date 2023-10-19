import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Welcome from '../screens/Welcome';
import DestinationScreen from '../screens/destinationScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='welcome' screenOptions={{headerShown:false}}>
            <Stack.Screen name='home' component={HomeScreen}/>
            <Stack.Screen name='welcome' component={Welcome}/>
            <Stack.Screen name='destination' component={DestinationScreen}/>
             
        </Stack.Navigator>
    </NavigationContainer>
  );
}