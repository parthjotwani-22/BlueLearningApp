import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import style from './style';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import screenName from '../../utils/screenName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import SvgIcon from '../../asstes/SvgIcon';
const Home = props => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const startLoading = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // };
  const userData = props?.route?.params?.data;
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [list, setList] = useState();
  const [name, setName] = useState(userData?.item?.name);
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState(userData?.item?.email);
  const [emailError, setEmailError] = useState(null);
  const [dob, setDob] = useState(userData?.item?.dob);
  const [age, setAge] = useState('');
  const [temp, setTemp] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [imagePath, setImage] = useState('');
  const [image, setImage1] = useState('');
  const [select, setSelected] = useState(null);
  console.log('temp', temp);

  const Validation = () => {
    let isValid = true;
    let namereg = /^([a-zA-Z]{3,15})/;
    const reg =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (name == '') {
      isValid = false;
      setNameError('please enter your name');
    } else if (!namereg.test(name)) {
      isValid = false;
      setNameError('please enter valid name');
    } else {
      setNameError('');
    }
    if (email == '') {
      isValid = false;
      setEmailError('please enter your Email');
    } else if (!reg.test(email)) {
      isValid = false;
      setEmailError('please enter valid Email');
    } else {
      setEmailError('');
    }

    if (isValid) {
      props.navigation.goBack();
    }

    data.push({
      name: name,
      email: email,
      dob: dob,
      age: Age,
      imagePath: imagePath,
    });
    console.log('Data', data);
    storeData(data);
  };
  const edit = index => {
    let temp = [...data];
    temp[index].email = email;
    temp[index].name = name;
    temp[index].dob = dob;
    temp[index].age = Age;

    setData([...temp]);
    storeData(data);
    setModalVisible(!modalVisible);
    props.navigation.goBack();
  };
  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('Cruddetails', jsonValue);
    } catch (error) {}
  };
  const getData = async value => {
    try {
      const jsonValue = await AsyncStorage.getItem('Cruddetails');
      console.log('details', jsonValue);
      if (jsonValue != null) {
        setData([JSON.parse(jsonValue)]);
      }
    } catch (e) {}
  };
  useFocusEffect(
    React.useCallback(() => {
      getData([]);
    }, []),
  );
  const userDOB = moment(dob, 'DD/MM/YYYY');
  const Age = moment().diff(userDOB, 'years');
  const ImageChange = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      console.log(image.path);
      setImage(image.path);
      setModalVisible(false);
    });
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    }).then(image => {
      console.log(image.path);
      setImage(image.path);
      setModalVisible(false);
    });
  };

  const renderitem = ({Item}) => {
    return (
      <View>
        <Text>{Item.name}</Text>
        <Text>{Item.email}</Text>
        <Text>{moment().format('DD/MM/YYYY')}</Text>
        <Text>{Item.Age}</Text>
        <Image source={Item.imagePath} />
        <Image
          source={{
            uri: 'https://www.flaticon.com/svg/vstatic/svg/3917/3917772.svg?token=exp=1658389419~hmac=719a0b19018d7eeb09df3ddca1c25ae8',
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <Text style={style.Heading}>Add User</Text>

        <TextInput
          style={style.Name}
          value={name}
          onChangeText={val => {
            setName(val);
          }}
          placeholder={'Name'}
          placeholderTextColor={'black'}
        />
        <Text style={{color: 'red', marginHorizontal: 30}}>{nameError}</Text>
        <TextInput
          style={style.Name}
          value={email}
          onChangeText={val => {
            setEmail(val);
          }}
          placeholder={'Email'}
          placeholderTextColor={'black'}
          keyboardType="email-address"
        />
        <Text style={{color: 'red', marginHorizontal: 30}}>{emailError}</Text>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <View style={{marginTop: 26, marginHorizontal: 30}}>
            <Text style={{fontSize: 20, borderBottomWidth: 1, color: 'black'}}>
              {!dob ? 'Select Date' : moment(dob).format('DD/MM/YYYY')}
            </Text>
          </View>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={RES => {
            setDob(RES),
              setOpen(false),
              setAge(moment().diff(userDOB, 'years'));
          }}
          minimumDate={new Date('2000-12-31')}
          maximumDate={new Date()}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <View style={{marginTop: 20, marginHorizontal: 30, marginTop: 40}}>
          <Text style={{fontSize: 20, borderBottomWidth: 1, color: 'black'}}>
            {!Age ? 'Age' : Age}
          </Text>
        </View>
        <View>
          <Image
            source={{uri: imagePath}}
            style={{
              height: 100,
              width: 100,
              alignSelf: 'center',
              marginTop: 20,
              borderRadius: 50,
            }}
          />

          <TouchableOpacity
            style={{
              borderWidth: 1,
              marginHorizontal: 25,
              paddingVertical: 10,
              marginTop: 20,
              borderColor: 'grey',
            }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <SvgIcon.plus style={{marginTop: 3}} />
              <Text style={{fontSize: 20, color: 'grey'}}>Add Image</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Modal
          visible={modalVisible}
          statusBarTranslucent
          transparent={true}
          animationType="fade">
          <View
            style={{
              backgroundColor: 'white',
              top: 500,
              marginHorizontal: 10,
              alignItems: 'center',
              alignContent: 'flex-end',
            }}>
            <TouchableOpacity onPress={() => ImageChange()}>
              <Text style={{height: 50, fontSize: 20, color: 'black'}}>
                Choose image
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openCamera()}>
              <Text style={{height: 50, fontSize: 20, color: 'black'}}>
                openCamera
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              top: 500,
              marginHorizontal: 10,
              alignItems: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{height: 50, fontSize: 20, color: 'black'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity
          style={style.Submit}
          onPress={() =>
            props?.route?.params?.data.index
              ? edit(props?.route?.params?.data.index)
              : Validation()
          }>
          <Text style={style.Text3}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Success')}>
          <Text>Next</Text>
        </TouchableOpacity>
        <FlatList renderItem={renderitem} data={list} />
      </ScrollView>
    </View>
  );
};
export default Home;
