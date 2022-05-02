import React, {useState} from 'react';
import { ImageBackground, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import Componente from './components/Componente'

const image = { uri: "https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-creative-dream-neon-drink-image_30960.jpg" };

export default function App() {
    const [num, setNum]= useState();
    return (
      <View style={styles.container}>
  <ImageBackground  style={{
            position: "absolute",
            height: '100%',
            width: '100%'
          }}source={image}>
    </ImageBackground>
          <View style={styles.row}>
            <Text style= {styles.texto}>Número de convidados</Text>
            <TextInput style={styles.input} value={num} onChangeText={(value) => setNum(value)} />
          </View>
          <Componente num={num}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 50,

    },
    row:{
      width: '100%'
    },
    input:{
      display: 'block',
      width: '60%',
      borderWidth: 1,
      marginLeft: '20%',
      marginTop: 50,
      marginBottom: 10,
      padding: 15,
      fontSize: 20,
      borderRadius: 4,
    },
    texto: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
    }
  });

