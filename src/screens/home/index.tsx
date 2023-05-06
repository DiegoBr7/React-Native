import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View , FlatList , Alert} from 'react-native';
import { styles } from './styles';

import { Participant } from '../../../Components/Participants';


export default function Home() {

  const participante = ['AAAAAAAAA ' , "JAAAAAAAA" , "KAAAAAAAA" , "LAAAAAAAA" , "RAAAAAAAA",'AAAAAAAAA ' , "JAAAAAAAA" , "KAAAAAAAA" , "LAAAAAAAA" , "RAAAAAAAA"]

  function clicar() {
    if(participante.includes("JAAAAAAAA")){
      return Alert.alert("Participante existe")
    }
    console.log("vc clicou em add")
  }



  function remover(name: string) {
    Alert.alert(`remover participante ${name} ?`,'',[
      {
      text:'Sim',
      onPress:() => Alert.alert("Deletado")}
  ])
    console.log(`Vc clicou em remover participante ${name}`)
  }


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.eventName} >Nome do Evento
        </Text>

        <Text
          style={styles.eventDate}
        >'Primeiro codigo React Native dia 20/04/2023 ás 23:59 e alguns segundos'
        </Text>

        <View style={
          styles.form
        } >
          <TextInput
            style={
              styles.input
            }
            placeholder="Escreva Alguma coisa"
            placeholderTextColor={"#ffffff"}
          />

          <TouchableOpacity onPress={clicar} style={styles.button}>
            <Text style={styles.buttonText} >
              +
            </Text>
          </TouchableOpacity>

        </View>

    <FlatList
     data={participante}

     keyExtractor={item => item}
     renderItem={({item}) => (
      <Participant
      key={item}
      name={item}
      onRemove={ () => remover(item)} 
      
      />
     )}    
    
    />
        
      </View>

    </>

  );
}