import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './auth/authstack';
import HomeDrawer from './home/drawer_home';

const Route=() =>{
  return (
    <NavigationContainer>
        <AuthStack/>
        {/* <HomeDrawer/> */}
    </NavigationContainer>
  );
}
export default Route