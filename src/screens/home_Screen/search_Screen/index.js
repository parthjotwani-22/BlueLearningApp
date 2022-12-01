import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import menu from '../../../assets/pngs/Menu_icon.png';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../../../utils/colors';
import search from '../../../assets/pngs/Search_icon.png';
import logo from '../../../assets/pngs/Main_icon.png';
import {set} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SearchScreen = props => {
  const [course, setcourse] = useState([
    {
      name: 'REACT NATIVE',
      tasks: '09',
      key: '1',
      bgg: logo,
      cost: 'FREE',
      rg: true,
    },
    {name: 'UNITY', tasks: '08', key: '2', bgg: logo, cost: 'PAID', rg: false},
    {name: 'HTML', tasks: '07', key: '3', bgg: logo, cost: 'PAID', rg: false},
    {name: 'PYTHON', tasks: '04', key: '4', bgg: logo, cost: 'FREE', rg: true},
    {name: 'NODE.JS', tasks: '03', key: '5', bgg: logo, cost: 'FREE', rg: true},
    {name: 'JAVA', tasks: '07', key: '6', bgg: logo, cost: 'PAID', rg: false},
    {
      name: 'HTML AND CSS',
      tasks: '10',
      key: '7',
      bgg: logo,
      cost: 'PAID',
      rg: false,
    },
  ]);
  const [data, setdata] = useState('');
  const [result, setresult] = useState(course);
  const [en, seten] = useState(false);

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

  function searchData(response) {
    let det = course.filter(res => {
      let values = [res.name, res.cost];
      let regax = values.toString().toLowerCase();

      return regax.includes(response.toLowerCase());
    });
    return det;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tpview}>
        <TouchableOpacity
          style={{flex: 0.2, justifyContent: 'center'}}
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <Image source={menu} style={styles.menu}></Image>
        </TouchableOpacity>
        <View style={{flex: 0.1, justifyContent: 'center', marginLeft: 20}}>
          <Image source={search} style={{width: 20, height: 20}} />
        </View>
        <View style={{flex: 0.7, alignSelf: 'center', marginRight: 20}}>
          <TextInput
            style={styles.searchinp}
            onChangeText={text => {
              setresult(searchData(text));
            }}
            onSubmitEditing={() => {
              seten(false);
            }}></TextInput>
        </View>
      </View>

      <View style={en ? styles.empty : styles.outview}>
        <FlatList
          data={result}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.flelement}>
              <View style={styles.flimagecontainer}>
                <Image
                  source={item.bgg}
                  style={{height: 60, width: 60, margin: 5}}></Image>
              </View>
              <View style={item.rg ? styles.free : styles.paid}>
                <Text style={{textAlign: 'center', color: colors.bgcolor}}>
                  {item.cost}
                </Text>
              </View>
              <View
                style={{
                  flex: 0.7,
                  marginHorizontal: 10,
                  justifyContent: 'space-evenly',
                }}>
                <Text style={styles.fltext}>{item.name}</Text>
                <Text style={styles.flsmlltext}>{item.tasks} Modules</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

// onChangeText={text => {
//               text = text.toUpperCase();
//               seten(true), setdata(text);
//             }}
//             onSubmitEditing={() => {
//               seten(false);
//               if (data != '') {
//                 var selcourse = course.filter(item => {
//                   return (
//                     Object.values(item).includes(data) ||
//                     item.name.includes(data)
//                   );
//                 });
//                 setresult(selcourse);
//               } else {
//                 setresult(course);
//               }
//             }}
