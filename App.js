import { Alert, View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import ImagenRickAndMorty from './ImagenRickAndMorty';
import OpenAI from './OpenAI';
import GoogleAI from './GoogleAI';


const App = () => {

  const Saludar = () => {
    Alert.alert('Hola mundo!')
  };

  return (

    <View style={styles.container}>

      <ImagenRickAndMorty id={22}/>
      <OpenAI pregunta="Escribe una palabra similar a cohete"/>
      <GoogleAI/>
     
      <Text style={styles.title}>Pregunta:</Text>
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.input}>
      </TextInput>
      <Text>Resultado aqui</Text>
      <TouchableOpacity
        onPress={Saludar}
        style={styles.button}>
        <Text style={styles.buttonText}>Consultar</Text>
      </TouchableOpacity>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 50,
    color: '#333',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    margin: 10,
    fontSize: 30,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    width: '40%',
    borderRadius: 10
  }

})

export default App;

/* <Button
title="Consulta"
color="#f194ff"
onPress={Saludar}>
</Button> */