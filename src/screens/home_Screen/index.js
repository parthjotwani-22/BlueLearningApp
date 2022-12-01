import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  BackHandler,
} from 'react-native';
import colors from '../../utils/colors';
import styles from './style';
import logo from '../../assets/pngs/Main_icon.png';
import arr from '../../assets/pngs/arrow.png';
import menu from '../../assets/pngs/Menu_icon.png';
const HomeScreen = props => {
  const [task, settask] = useState([
    {name: 'React Native', tasks: '03', key: '1', bgg: logo, sty: true},
    {name: 'Node.js', tasks: '04', key: '2', bgg: logo, sty: false},
    {name: 'HTML', tasks: '01', key: '3', bgg: logo, sty: true},
    {name: 'Java', tasks: '06', key: '4', bgg: logo, sty: false},
  ]);
  const [ctask, setctask] = useState(task);
  const [showtask, setshowtask] = useState(task);
  const [moredata, setmoredata] = useState([
    {name: 'Unity', tasks: '03', key: '5', bgg: logo, sty: true},
    {name: 'HTML and CSS', tasks: '04', key: '6', bgg: logo, sty: false},
    {name: 'Python', tasks: '01', key: '7', bgg: logo, sty: true},
    {name: 'Django', tasks: '06', key: '8', bgg: logo, sty: false},
  ]);
  const [cshow, setcshow] = useState(false);
  const [show, setshow] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <View
        style={{
          height: 300,
          backgroundColor: colors.view_bl,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          flexDirection: 'row',
        }}>
        <View style={{position: 'absolute'}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.openDrawer();
            }}
            style={{borderRadius: 30, marginTop: 15, marginHorizontal: 5}}>
            <Image source={menu} style={styles.menu} />
          </TouchableOpacity>
        </View>

        <Image source={logo} style={styles.smllicon}></Image>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              fontFamily: 'sans-serif-condensed',
              marginHorizontal: 30,
              textAlign: 'left',
              fontSize: 30,
              color: colors.bgcolor,
            }}>
            Start{'\n'}Learning New {'\n'}Technologies
          </Text>
        </View>
      </View>

      <View style={{flex: 0.3, margin: 10, marginVertical: 30}}>
        <View style={{flex: 0.2}}>
          <Text style={{textAlign: 'left'}}>
            <Text style={styles.lrgtxt}>Continue Learning</Text>
          </Text>
          <TouchableOpacity>
            {!cshow && (
              <Text
                style={styles.blulrgtxt}
                onPress={() => {
                  setctask(task.concat(moredata));
                  setcshow(true);
                }}>
                View More
              </Text>
            )}
            {cshow && (
              <Text
                style={styles.blulrgtxt}
                onPress={() => {
                  setctask(task);
                  setcshow(false);
                }}>
                View Less
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.2}}>
          <FlatList
            horizontal
            data={ctask}
            renderItem={({item}) => (
              <TouchableOpacity
                style={item.sty ? styles.flview : styles.flview2}>
                <View style={{flex: 0.3}}>
                  <Image source={item.bgg} style={styles.icon} />
                </View>

                <View style={{flex: 0.2, justifyContent: 'center'}}>
                  <Text style={styles.fltxt}>{item.name}</Text>
                </View>

                <View style={{flex: 0.5, marginTop: 15, flexDirection: 'row'}}>
                  <Text style={styles.fltxt}>
                    <Text style={{fontSize: 20}}>
                      {' '}
                      {item.tasks} Modules {'\n'}{' '}
                      <Text style={{textDecorationLine: 'underline'}}>
                        {' '}
                        Left{' '}
                      </Text>{' '}
                    </Text>
                  </Text>
                  <Image
                    source={arr}
                    style={{height: 30, width: 30, marginTop: 10}}
                  />
                </View>
              </TouchableOpacity>
            )}></FlatList>
        </View>
      </View>

      <View style={{flex: 0.3, margin: 10}}>
        <View style={{flex: 0.2}}>
          <Text style={{textAlign: 'left'}}>
            <Text style={styles.lrgtxt}>New Courses For You</Text>
          </Text>
          <TouchableOpacity>
            {!show && (
              <Text
                style={styles.blulrgtxt}
                onPress={() => {
                  setshowtask(task.concat(moredata));
                  setshow(true);
                }}>
                View More
              </Text>
            )}
            {show && (
              <Text
                style={styles.blulrgtxt}
                onPress={() => {
                  setshowtask(task);
                  setshow(false);
                }}>
                View Less
              </Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.2, marginBottom: 90}}>
          <FlatList
            horizontal
            data={showtask}
            renderItem={({item}) => (
              <TouchableOpacity
                style={item.sty ? styles.flview : styles.flview2}>
                <View style={{flex: 0.3}}>
                  <Image source={item.bgg} style={styles.icon} />
                </View>

                <View style={{flex: 0.2, justifyContent: 'center'}}>
                  <Text style={styles.fltxt}>{item.name}</Text>
                </View>

                <View style={{flex: 0.5, marginTop: 15, flexDirection: 'row'}}>
                  <Text style={styles.fltxt}>
                    <Text style={{fontSize: 20}}>
                      {' '}
                      {item.tasks} Modules {'\n'}{' '}
                      <Text style={{textDecorationLine: 'underline'}}>
                        {' '}
                        Left{' '}
                      </Text>{' '}
                    </Text>
                  </Text>
                  <Image
                    source={arr}
                    style={{height: 30, width: 30, marginTop: 10}}
                  />
                </View>
              </TouchableOpacity>
            )}></FlatList>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
