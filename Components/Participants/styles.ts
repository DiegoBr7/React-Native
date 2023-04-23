import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:"#1f1e25",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        marginBottom:10
    },
    name:{
        color:"white",
        flex:1,
        fontSize:12,
        marginLeft:16
    },
    buttonText:{
        color:'#FFF',
        fontSize:26,
      },
      button:{
        color:'#FFF',
        width:250,
        height:50,
        borderRadius:5,
        backgroundColor:"#e23c44",
        justifyContent:"center",
        alignItems:"center"
      }
})