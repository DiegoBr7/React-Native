import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <>
  <View style={styles.container}>
      <Text style={styles.eventName} >Nome do Evento
      </Text>

      <Text
      style={styles.eventDate}
      >'Primeiro codigo React Native dia 20/04/2023 ás 23:59 e alguns segundos'
      </Text>
  </View>
  </>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'blue',
    padding: 24,     
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  eventName:{
    color:'pink',
    fontSize:24,
    fontWeigth:'bold',
    marginTop:48
 },

  eventDate:{
    color:'violet',
    fontSize:50
  }

});
