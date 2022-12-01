import * as React from 'react';
import screens from '../../utils/screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeTab from './hometab';
import {View, Button, Image} from 'react-native';
import {color, SlideInDown, SlideInLeft} from 'react-native-reanimated';
import colors from '../../utils/colors';
import CustomDrawer from '../../components/Custom Drawer/CustomDrawer';
import homeimg from '../../assets/pngs/Home.png';
import notifimg from '../../assets/pngs/Mail.png';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const HomeDrawer = props => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.diff_tx,
        drawerActiveTintColor: colors.inactive,
        drawerInactiveTintColor: colors.bgcolor,
        drawerType: 'slide',
        drawerItemStyle: {marginTop: 20, borderRadius: 20},
        drawerLabelStyle: {marginLeft: -10, marginVertical: 10},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeTab}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={homeimg}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? colors.inactive : colors.bgcolor,
              }}></Image>
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={screens.Notifications}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={notifimg}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? colors.inactive : colors.bgcolor,
              }}></Image>
          ),
        }}
      />
      <Drawer.Screen
        name="People"
        component={screens.People}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={notifimg}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? colors.inactive : colors.bgcolor,
              }}></Image>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default HomeDrawer;
