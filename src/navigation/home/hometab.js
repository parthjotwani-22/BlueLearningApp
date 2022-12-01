import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screens from '../../utils/screens';
import homeimg from'../../assets/pngs/Home.png'
import search from'../../assets/pngs/Search_icon.png'
import profileimg from'../../assets/pngs/user-login.png'
import colors from '../../utils/colors';
import {Image, View,Text} from 'react-native'


const Tab = createBottomTabNavigator();

const HomeTab = (props)=> {
  return (
    
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarStyle:{
            position:'absolute',
            margin:20,
            height:70,
            borderRadius:20
        },
        tabBarShowLabel:false
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;

        //   if (route.name === 'MainHome') {
        //     iconName = homeimg
        //   } else if (route.name === 'Profile') {
        //     iconName = profileimg
        //   }
        //   if(focused){
        //     color=colors.view_bl
        //   }

        //   // You can return any component that you like here!
        //   return <Image source={iconName} style={{width:20,height:20,tintColor:color}}  />;
        // },
      })}

    >
    
        <Tab.Screen name="MainHome" component={screens.MainHome} options={{headerShown:false, 
          tabBarIcon:({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image  source={homeimg} style={{height:25,width:25,tintColor:focused ? colors.view_bl:colors.inactive}}/>
                <Text style={{fontSize:15,color:focused ? colors.view_bl:colors.inactive}}>HOME</Text>
            </View>
          )
        }}/>
        
        <Tab.Screen name="Search" component={screens.Search} options={{headerShown:false, 
          tabBarIcon:({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image  source={search} style={{height:25,width:25,tintColor:focused ? colors.view_bl:colors.inactive}}/>
                <Text style={{fontSize:15,color:focused ? colors.view_bl:colors.inactive}}>SEARCH</Text>
            </View>
          )
        }}/>

        <Tab.Screen name="Profile" component={screens.Profile} options={{headerShown:false, 
          tabBarIcon:({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image  source={profileimg} style={{height:25,width:25,tintColor:focused ? colors.view_bl:colors.inactive}}/>
                <Text style={{fontSize:15,color:focused ? colors.view_bl:colors.inactive}}>PROFILE</Text>
            </View>
          )
        }}/>
      </Tab.Navigator>
    
  );
}
export default HomeTab;