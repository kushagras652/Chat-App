import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../Screens/SplashScreen'
import SignIn from '../Screens/SignIn'
import NewScreen from '../Screens/NewScreen'


const StackNavigator = () => {
    const Stack=createStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='New' component={NewScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNavigator