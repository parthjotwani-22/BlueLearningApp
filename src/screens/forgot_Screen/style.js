import { StyleSheet } from "react-native"
import colors from "../../utils/colors"

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.bgcolor,
        flexDirection:"row"
    },
    bluecirc:{
        flex:0.5,
        width:200,
        borderBottomLeftRadius:500,
        backgroundColor:colors.view_bl,
        justifyContent:'center'
    },
    smllicon:{
        height:100,
        tintColor:colors.bgcolor2,
        width:100,
        overflow:'visible',
        alignSelf:'center',
        marginLeft:25
    },
    headtx:{
        fontSize:28,
        paddingHorizontal:10,
        color:colors.txtin
    },
    smlltx:{
        fontSize:20,
        paddingHorizontal:10,
        color:colors.txtin
    },
    txtinp:{
        borderRadius:5, 
        backgroundColor:colors.bgcolor2,
        marginHorizontal:30,
        marginBottom:20,
        color:colors.txtin,
        fontSize:20,
        padding:20
    },
    bttmcirc:{
        flex:1,
        margin:30,
        borderTopLeftRadius:500,
        borderTopRightRadius:500,
        backgroundColor:colors.bgcolor,
        justifyContent:'center',
        alignItems:"center"
    },
    presstxt:{
        alignSelf:"center",
        fontSize:40,
        color:colors.diff_tx,
        fontWeight:"500",
        marginVertical:35,
        marginLeft:50
    },
    nextbttnimg:{
        flex:0.3,
        height:40,
        width:30,
        marginLeft:5,
        tintColor:colors.diff_tx,
        alignSelf:'center'
    },
    bttn:{
        borderTopRightRadius:100,
        borderBottomRightRadius:100,
        marginRight:30,
        backgroundColor:colors.view_bl,
        shadowColor: colors.view_bl,
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        }
})