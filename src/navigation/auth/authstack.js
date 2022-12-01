// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../../utils/screens';
import HomeTab from '../home/hometab';

import HomeDrawer from '../home/drawer_home';
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={screens.Start} />
        <Stack.Screen name="Login" component={screens.Login}/>
        <Stack.Screen name="Signup" component={screens.Signup}/>
        <Stack.Screen name="Forgot" component={screens.Forgot}/>
        <Stack.Screen name="Drawer" component={HomeDrawer}/> 
      </Stack.Navigator>
  );
}

export default AuthStack;