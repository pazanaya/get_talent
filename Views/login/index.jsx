import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Button, Linking, Image,} from 'react-native';



const login=() => {
  return (
    <View style={styles.container}>

        <Text style={styles.titulo}> INICIAR
        <Text style={styles.titulo2}> SESIÓN
        </Text>
        </Text>
     
        <TextInput
          placeholder="usuario@correo.com"
          style={styles.TextInput}
        />
        <TextInput
          placeholder='password'
          style={styles.TextInput}
          secureTextEntry= {true}
        />
        <Text style={styles.contraseñaolvidada}> ¿Contraseña olvidada?

        </Text>
        <Button 
          title= 'INGRESAR' 
          style={styles.botoni}
        />
      <StatusBar style="auto" />
    </View>
  );
}
export default login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 35,
    color: '#64d9c5',
    fontWeight: 'normal',

  },
  titulo2: {
    fontSize: 35,
    color: "#64d9c5",
    fontWeight: 'bold'
  },
  contraseñaolvidada: {
    fontSize: 20,
    color: 'gray',
    marginTop: 30,

  },
  TextInput: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
    height: 50,
    borderRadius: 30,
    width: '80%',
    marginTop: 40,

  },
  botoni: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
    height: 50,
    borderRadius: 30,
    width: '80%',
    marginTop: 40,
  },
 /* imgstyle: {
    width: 100,
    height: 100,
    marginTop: 30.
  }

  */
   

});
