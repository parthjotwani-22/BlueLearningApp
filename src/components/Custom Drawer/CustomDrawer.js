import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import colors from '../../utils/colors';
import logo from '../../assets/pngs/Main_icon.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{backgroundColor: colors.view_bl, flex: 1}}>
      <View style={{flex: 0.3, justifyContent: 'space-around'}}>
        <Image
          source={logo}
          style={{
            width: 100,
            tintColor: colors.diff_tx,
            height: 100,
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={{flex: 0.6}}>
        <DrawerItemList {...props} />
      </View>
      <View style={{flex: 0.2}}>
        <TouchableOpacity
          style={{
            padding: 15,
            marginTop: 50,
            backgroundColor: colors.dblue,
            marginHorizontal: 10,
            borderRadius: 20,
          }}
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <Text
            style={{color: colors.bgcolor, fontSize: 15, fontWeight: '600'}}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
