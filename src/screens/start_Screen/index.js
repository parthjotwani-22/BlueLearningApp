import React, { useState } from 'react'
import { View, Text, ImageBackground ,Image ,TouchableOpacity, StatusBar} from 'react-native'
import colors from '../../utils/colors'
import styles from './style'
import footimg from'../../assets/pngs/abstract-blue-background.png'
import logo from'../../assets/pngs/Main_icon.png'
const StartScreen= (props) => {
    const[login,setlogin]=useState(true);
    const[signup,setsignup]=useState(false);
    return (
        <View style={styles.container}>
        <StatusBar hidden={true}></StatusBar>
        
            <View style={{flex:0.4,flexDirection:'row'}}>
                <View style={{flex:0.5,paddingLeft:20,justifyContent:'flex-end'}}>
                    <Text style={styles.headtx}>Welcome</Text>
                    <Text style={styles.smlltx}>Start your journey</Text>
                </View>
                <View style={styles.bluecirc}>
                    <Image style={styles.smllicon} source={logo}/>
                </View>
            </View>
            <View style={{flex:0.4}}>
                <View style={{flex:0.7,paddingHorizontal:20,justifyContent:'center'}}>
                    <Text style={styles.headtx}>Dive into the<Text style={{color:'#00FFFF'}}> Blue !</Text></Text>
                </View>
                <View style={styles.optview}>
                    <TouchableOpacity style={login?styles.press:styles.pressed} onPress={()=>{setlogin(true),setsignup(false),props.navigation.navigate("Login")}}><Text style={styles.presstxt}>Login</Text></TouchableOpacity>
                    <TouchableOpacity style={signup?styles.press:styles.pressed} onPress={()=>{setsignup(true),setlogin(false),props.navigation.navigate("Signup")}}><Text style={styles.presstxt}>Signup</Text></TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0.2}}>
                <View style={{flex:0.3}}></View>
                <View style={styles.bttmcirc}>
                    <TouchableOpacity>
                    <Text style={styles.smlltx}>Read Terms and conditions <Text style={{color:'#00FFFF'}}> Here.</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default StartScreen
