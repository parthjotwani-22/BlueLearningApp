import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../utils/colors';
import styles from './style';
import logo from '../../assets/pngs/Main_icon.png';
import arr from '../../assets/pngs/arrow.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {set} from 'react-native-reanimated';
import validate from '../../utils/validate';

const SignupScreen = props => {
  const [enable, setenable] = useState(false);
  const [see, setsee] = useState(false);
  const [name, setname] = useState('');
  const [filled, setfilled] = useState({
    name: false,
    phone: false,
    email: false,
    pass: false,
  });
  const [data, setdata] = useState({
    name: '',
    phone: '',
    email: '',
    pass: '',
  });
  const [err, seterr] = useState({
    name: '',
    phone: '',
    email: '',
    pass: '',
  });
  const [nfilled, setnfilled] = useState([]);
  useEffect(() => {
    let count = 0;
    for (let x in filled) {
      if (filled[x] == false) {
        if (!nfilled.includes(x)) {
          nfilled.push(x);
        }
      } else {
        count = count + 1;
        nfilled.pop(x);
      }
    }
    console.log(filled);
    console.log(nfilled);
  });

  const validateData = data => {
    if (data.name == '') {
      err.name = 'Enter Name';
      setenable(false);
    } else if (!validate.validate_string(data.name)) {
      err.name = 'Enter Correct Name';
      setenable(false);
    } else {
      err.name = null;
      setenable(true);
    }

    if (data.phone == '') {
      err.phone = 'Enter Phone No.';
      setenable(false);
    } else if (!validate.validate_number(data.phone)) {
      err.phone = 'Enter Correct Phone No.';
      setenable(false);
    } else {
      err.phone = null;
      setenable(true);
    }

    if (data.email == '') {
      err.email = 'Enter Email';
      setenable(false);
    } else if (!validate.validate_mail(data.email)) {
      err.email = 'Enter Correct Email';
      setenable(false);
    } else {
      err.email = null;
      setenable(true);
    }
    seterr({...err});
    //Navigation
    if (enable) {
      props.navigation.navigate('Drawer');
      storeData(data);
    } else {
      setsee(true);
    }
  };

  const storeData = async value => {
    let oldarray = [];
    try {
      const jsonvalue = JSON.stringify(value);
      const oldata = await AsyncStorage.getItem('AllData');
      if (oldata != null) {
        oldarray = JSON.parse(oldata);
        oldarray.push({value});
      } else {
        oldarray = Array(value);
      }
      const jsonarray = JSON.stringify(oldarray);
      await AsyncStorage.setItem('UserData', jsonvalue);
      await AsyncStorage.setItem('AllData', jsonarray);
      //const jsonvalue = JSON.stringify(value);
      //await AsyncStorage.setItem('UserData', jsonvalue);
    } catch (e) {
      // saving error
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={{flex: 0.05, backgroundColor: colors.view_bl}}></View>
        <View
          style={{
            flex: 0.95,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          <View style={{flex: 0.3, flexDirection: 'row', minHeight: 200}}>
            <View
              style={{flex: 0.5, paddingLeft: 20, justifyContent: 'flex-end'}}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  height: 40,
                  width: 40,
                  marginBottom: 30,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack();
                  }}>
                  <Image
                    source={arr}
                    style={{
                      width: 30,
                      height: 40,
                      tintColor: colors.txtin,
                      rotation: 180,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.headtx}>Welcome</Text>
              <Text style={styles.smlltx}>
                <Text style={{color: colors.diff_tx}}>Signup</Text> by creating
                a new Account
              </Text>
            </View>

            <View style={styles.bluecirc}>
              <Image style={styles.smllicon} source={logo} />
            </View>
          </View>
          <View style={{flex: 0.3, justifyContent: 'center'}}>
            <View style={{margin: 20}}>
              <Text style={styles.smlltx}>Name:</Text>
              {see && (
                <Text style={styles.smlltx}>
                  <Text style={{color: 'red'}}>{err.name}</Text>
                </Text>
              )}
            </View>
            <TextInput
              style={
                see
                  ? filled.name
                    ? styles.txtinp
                    : styles.errinp
                  : styles.txtinp
              }
              keyboardType="email-address"
              onChangeText={text => {
                if (text !== '') {
                  setfilled(props => ({
                    ...props,
                    name: true,
                  }));
                }
                setdata(props => ({
                  ...props,
                  name: text,
                }));
              }}></TextInput>

            <View style={{margin: 20}}>
              <Text style={styles.smlltx}>Phone No:</Text>
              {see && (
                <Text style={styles.smlltx}>
                  <Text style={{color: 'red'}}>{err.phone}</Text>
                </Text>
              )}
            </View>
            <TextInput
              style={
                see
                  ? filled.pass
                    ? styles.txtinp
                    : styles.errinp
                  : styles.txtinp
              }
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={text => {
                if (text != '') {
                  setfilled(props => ({
                    ...props,
                    phone: true,
                  }));
                  setdata(props => ({
                    ...props,
                    phone: text,
                  }));
                }
              }}></TextInput>

            <View style={{margin: 20}}>
              <Text style={styles.smlltx}>Email:</Text>
              {see && (
                <Text style={styles.smlltx}>
                  <Text style={{color: 'red'}}>{err.email}</Text>
                </Text>
              )}
            </View>
            <TextInput
              style={
                see
                  ? filled.email
                    ? styles.txtinp
                    : styles.errinp
                  : styles.txtinp
              }
              keyboardType="email-address"
              onChangeText={text => {
                if (text != '') {
                  setfilled(props => ({
                    ...props,
                    email: true,
                  }));
                  setdata(props => ({
                    ...props,
                    email: text,
                  }));
                }
              }}></TextInput>

            <View style={{margin: 20}}>
              <Text style={styles.smlltx}>Password:</Text>
            </View>
            <TextInput
              style={
                see
                  ? filled.pass
                    ? styles.txtinp
                    : styles.errinp
                  : styles.txtinp
              }
              secureTextEntry={true}
              onChangeText={text => {
                if (text != '') {
                  setfilled(props => ({
                    ...props,
                    pass: true,
                  }));
                  setdata(props => ({
                    ...props,
                    pass: text,
                  }));
                }
              }}></TextInput>
          </View>
          <View style={{paddingTop: 10, flex: 0.3}}>
            <View style={styles.bttn}>
              <TouchableOpacity
                style={{flex: 1, borderRadius: 100, flexDirection: 'row'}}
                onPress={() => {
                  validateData(data);
                }}>
                <Text style={styles.presstxt}>Signin</Text>
                <Image source={arr} style={styles.nextbttnimg}></Image>
              </TouchableOpacity>
            </View>
            {!enable && see && (
              <Text style={{textAlign: 'center', color: 'red', marginTop: 20}}>
                {/* Enter {nfilled.toString()} */}
                Please enter all the above given details
              </Text>
            )}
          </View>

          <View style={{flex: 0.1}}>
            <View style={styles.bttmcirc}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Login');
                }}>
                <Text style={styles.smlltx}>
                  Already have an Account{' '}
                  <Text style={{color: '#00FFFF'}}> Login! </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

// const jsonvalue = JSON.stringify(value);
// const oldata = await AsyncStorage.getItem('AllData');
// oldarray = JSON.parse(oldata);
// const newarray = [{value}];
// const jsonarray = JSON.stringify(oldarray.concat(newarray));
// await AsyncStorage.setItem('UserData', jsonvalue);
// await AsyncStorage.setItem('AllData', jsonarray);
