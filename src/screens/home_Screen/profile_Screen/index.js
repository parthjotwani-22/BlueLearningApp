import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import login from '../../../assets/pngs/user-login.png';
import colors from '../../../utils/colors';
import phone from '../../../assets/pngs/Phone-icon.png';
import mail from '../../../assets/pngs/Mail.png';
import menu from '../../../assets/pngs/Menu_icon.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProfileScreen = props => {
  const [data, setdata] = useState('');

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserData');
      console.log('detais', value);
      if (value !== null) {
        setdata(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tpview}>
        <View style={{position: 'absolute'}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.openDrawer();
            }}
            style={{borderRadius: 30, marginTop: 15, marginHorizontal: 5}}>
            <Image source={menu} style={styles.menu} />
          </TouchableOpacity>
        </View>
        <View style={styles.imgview}>
          <Image source={login} style={styles.img}></Image>
        </View>
        <View style={styles.txtview}>
          <Text style={styles.tptxt}>
            Hello,{'\n'}
            {data.name}
          </Text>
        </View>
      </View>
      <View style={{flex: 0.7}}>
        <View style={{flex: 0.2, flexDirection: 'row', marginVertical: 30}}>
          <View style={styles.achieve}>
            <Text style={styles.achievetxt}>Stars</Text>
            <Text style={styles.achievetxt}>4/5</Text>
          </View>
          <View style={styles.achieve}>
            <Text style={styles.achievetxt}>Points</Text>
            <Text style={styles.achievetxt}>250</Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: colors.inactive,
            borderRadius: 500,
            marginHorizontal: 10,
          }}></View>
        <View
          style={{
            flex: 0.6,
            marginVertical: 20,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              flex: 0.2,
              marginHorizontal: 40,
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}>
            <Image
              source={phone}
              style={{height: 30, width: 30, tintColor: colors.view_bl}}
            />
            <Text style={{color: colors.txtin, fontSize: 25}}>
              {' '}
              : {data.phone}
            </Text>
          </View>
          <View
            style={{
              flex: 0.2,
              marginHorizontal: 40,
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}>
            <Image
              source={mail}
              style={{height: 30, width: 30, tintColor: colors.view_bl}}
            />
            <Text style={{color: colors.txtin, fontSize: 25}}>
              {' '}
              : {data.email}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

{
  /* <FlatList data={details} renderItem={({item})=>(
                    <View style={styles.detail_view}>
                        <Text style={styles.smlltxt}>{item.type} :<Text style={{color:colors.view_bl}}>  {item.det}</Text></Text>
                    </View>)}/> */
}

// const[details,setdetails]=useState([{det:"Parth Jotwani",type:"Name"},{det:"1234567",type:"Phone No."},{det:"xyz@gmail.com",type:"E-mail"},{det:"Lj Engineering College",type:"College"}])
