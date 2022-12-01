import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import logo from '../../../assets/pngs/Main_icon.png';
import {FlatList} from 'react-native-gesture-handler';
import colors from '../../../utils/colors';

const NotifScreeen = props => {
  const [notif, setnotif] = useState([
    {
      data: 'New Courses launching soon , Stay Tuned !!!',
      key: '1',
      time: 'Today',
    },
    {
      data: 'New Courses launching soon , Stay Tuned !!!',
      key: '2',
      time: '1 Day Ago',
    },
    {
      data: 'New Courses launching soon , Stay Tuned !!!',
      key: '3',
      time: '3 Week Ago',
    },
    {
      data: 'New Courses launching soon , Stay Tuned !!!',
      key: '4',
      time: '3 Week Ago',
    },
    {
      data: 'New Courses launching soon , Stay Tuned !!!',
      key: '5',
      time: '4 Week Ago',
    },
    {
      data: 'New Courses launching soon , Stay Tuned !!!',
      key: '6',
      time: '5 Week Ago',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.tpview}>
        <Text style={styles.tptext}>Notifications</Text>
        <Image source={logo} style={styles.img}></Image>
      </View>
      <View style={{flex: 0.9}}>
        <FlatList
          data={notif}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.flview}>
              <Text
                style={{
                  fontSize: 15,
                  color: colors.inactive,
                  marginBottom: 10,
                }}>
                {item.time}
              </Text>
              <Text style={styles.fltext}>{item.data}</Text>
            </TouchableOpacity>
          )}></FlatList>
      </View>
    </View>
  );
};

export default NotifScreeen;
