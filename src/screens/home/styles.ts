import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

      backgroundColor:'blue',
      padding:30,     
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    eventName:{
      color:'pink',
      fontSize:20,
      fontWeigth:'bold',
      marginTop:48
   },
  
    eventDate:{
      color:'violet',
      fontSize:20
    },
    input:{
      flex:1,
        width:20,
        height:26,
        backgroundColor:"#6b6b6b",
        borderRadius:5,
        color:"#black",
        padding:26,
        marginRight:12
    },
    buttonText:{
      color:'#gggggg',
      fontSize:26,
    },
    button:{
      width:50,
      height:50,
      borderRadius:5,
      backgroundColor:"#31CF67",
      justifyContent:"center",
      alignItems:"center"
    },
    form:{
      width:'100%',
      flexDirection:"row",
      marginTop:26,
      marginBottom:42
    
    }
      

  
  });
  