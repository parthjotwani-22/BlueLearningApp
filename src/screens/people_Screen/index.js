import React, {useState, useEffect} from 'react';
import styles from './style';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {View, Text, FlatList} from 'react-native';

const PeopleScreen = props => {
  const [data, setdata] = useState();
  useEffect(() => {
    getData();
    console.log('Detail', data);
  }, []);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('AllData');
      if (value !== null) {
        setdata(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={item => {
          <View style={styles.peoples}>
            <Text>{item.value}</Text>
          </View>;
        }}
      />
    </View>
  );
};

export default PeopleScreen;
