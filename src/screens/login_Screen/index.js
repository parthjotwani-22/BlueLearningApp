import React, {useState} from 'react';
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
import CustomInput from '../../components/customInput';

const LoginScreen = props => {
  const [enable, setenable] = useState(false);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={{flex: 0.05, backgroundColor: colors.view_bl}}></View>
        <View style={{flex: 0.95, flexDirection: 'column'}}>
          <View style={{flex: 0.3, flexDirection: 'row'}}>
            <View
              style={{flex: 0.5, paddingLeft: 20, justifyContent: 'flex-end'}}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  height: 40,
                  width: 40,
                  marginBottom: 25,
                  marginTop: 10,
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
              <Text style={styles.headtx}>Welcome Again </Text>
              <Text style={styles.smlltx}>
                <Text style={{color: colors.diff_tx}}>Login</Text> to your
                Account
              </Text>
            </View>

            {/* <CustomInput label="sssss" /> */}

            <View style={styles.bluecirc}>
              <Image style={styles.smllicon} source={logo} />
            </View>
          </View>
          <View style={{flex: 0.3, justifyContent: 'center'}}>
            <View style={{margin: 20}}>
              <Text style={styles.smlltx}>Email:</Text>
            </View>
            <TextInput
              style={styles.txtinp}
              keyboardType="email-address"
              onChangeText={() => {
                setenable(true);
              }}></TextInput>
            <View style={{margin: 20}}>
              <Text style={styles.smlltx}>Password:</Text>
            </View>
            <TextInput style={styles.txtinp} secureTextEntry={true}></TextInput>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Forgot');
              }}>
              <Text
                style={{
                  textAlign: 'right',
                  marginHorizontal: 20,
                  color: colors.view_bl,
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 10, flex: 0.3}}>
            <View style={styles.bttn}>
              <TouchableOpacity
                disabled={enable ? false : true}
                style={{flex: 1, borderRadius: 100, flexDirection: 'row'}}
                onPress={() => {
                  props.navigation.navigate('Drawer');
                }}>
                <Text style={styles.presstxt}>Login</Text>
                <Image source={arr} style={styles.nextbttnimg}></Image>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flex: 0.1}}>
            <View style={styles.bttmcirc}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Signup');
                }}>
                <Text style={styles.smlltx}>
                  Dont have an Account{' '}
                  <Text style={{color: '#00FFFF'}}> Sign up! </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
