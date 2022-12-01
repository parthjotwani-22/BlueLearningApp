import { StyleSheet } from "react-native"
import colors from "../../utils/colors"

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.bgcolor
    },
    headtx:{
        fontSize:35,
        paddingHorizontal:10,
        color:colors.txtin
    },
    smlltx:{
        fontSize:20,
        paddingHorizontal:10,
        color:colors.txtin
    },
    optview:{
        flex:0.3,
        marginTop:10,
        flexDirection:"row",
        backgroundColor:colors.view_bl,
        marginHorizontal:20,
        borderRadius:25,
        padding:10
    },
    press:{
        backgroundColor:colors.bgcolor,
        paddingVertical:10,
        color:colors.txt,
        flex:0.5,
        justifyContent:"center",
        borderRadius:25,
        
    },
    pressed:{
        backgroundColor:colors.bgcolor2,
        paddingVertical:10,
        color:colors.txt,
        flex:0.5,
        justifyContent:"center",
        borderRadius:25,
        
    },
    bluecirc:{
        flex:0.5,
        width:400,
        borderBottomLeftRadius:500,
        backgroundColor:'#0E86D4',
        justifyContent:'center'
    },
    presstxt:{
        textAlign:"center",
        fontSize:25,
        color:colors.txtin,
        fontWeight:"500",
    },
    smllicon:{
        height:100,
        tintColor:colors.bgcolor2,
        width:100,
        overflow:'visible',
        alignSelf:'center',
        marginLeft:15
    },
    bttmcirc:{
        flex:0.7,
        marginTop:30,
        borderTopLeftRadius:500,
        borderTopRightRadius:500,
        backgroundColor:'#0E86D4',
        justifyContent:'center',
        alignItems:"center"
    },
})