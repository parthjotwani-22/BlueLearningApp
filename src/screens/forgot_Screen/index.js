import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import colors from '../../utils/colors';
import styles from './style';
import logo from '../../assets/pngs/Main_icon.png';
import arr from '../../assets/pngs/arrow.png';
const ForgotScreen = props => {
  const [enable, setenable] = useState(false);
  const [check, setcheck] = useState('');
  const [original, setoriginal] = useState('');
  const [confirm, setconfirm] = useState('');
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS == 'ios' ? 'padding' : null}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{flex: 0.05, backgroundColor: colors.view_bl}}></View>
          <View style={{flex: 0.95, flexDirection: 'column'}}>
            <View style={{flex: 0.3, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 0.5,
                  paddingLeft: 20,
                  justifyContent: 'flex-end',
                }}>
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
                        width: '80%',
                        height: '80%',
                        marginTop: '5%',
                        tintColor: colors.txtin,
                        rotation: 180,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.headtx}>Forgot{'\n'}Password? </Text>
                <Text style={styles.smlltx}>
                  <Text style={{color: colors.diff_tx}}>Enter</Text> Recovery
                  E-mail
                </Text>
              </View>

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
                onChangeText={text => {
                  setenable(true), setoriginal(text);
                }}
              />
              <View style={{margin: 20}}>
                <Text style={styles.smlltx}>Confirm Email:</Text>
              </View>
              <TextInput
                style={styles.txtinp}
                keyboardType="email-address"
                onChangeText={text => {
                  setconfirm(text);
                }}
              />
            </View>
            <View style={{paddingTop: 10, flex: 0.3}}>
              <View style={styles.bttn}>
                <TouchableOpacity
                  disabled={enable ? false : true}
                  style={{flex: 1, borderRadius: 100, flexDirection: 'row'}}
                  onPress={() => {
                    if (confirm != original) {
                      setcheck('E-mail Does not match');
                    } else {
                      props.navigation.navigate('Start');
                    }
                  }}>
                  <Text style={styles.presstxt}>Continue</Text>
                  <Image source={arr} style={styles.nextbttnimg}></Image>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View>
                <Text style={{color: 'red', textAlign: 'center'}}>{check}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotScreen;
