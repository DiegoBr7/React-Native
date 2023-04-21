import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


export default function Home() {
  return (
  <>
  <View style={styles.container}>
      <Text style={styles.eventName} >Nome do Evento
      </Text>

      <Text
      style={styles.eventDate}
      >'Primeiro codigo React Native dia 20/04/2023 ás 23:59 e alguns segundos'
      </Text>

      <TextInput
      style={
        styles.input
      }
      placeholder='Escreva aqui alguma coisa'
      placeholderTextColor={"#6b6b6b"}
      />       

      

      <TouchableOpacity>
        
        <TouchableOpacity/>
  </View>
  </>

  );
}