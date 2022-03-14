import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Button, Linking, Image,} from 'react-native';

import React from 'react';



const login = () => {
  return (
    <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.titulo}> INICIAR </Text>
          <Text style={styles.titulo2}> SESIÓN </Text>  
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="usuario@correo.com"
            style={styles.input}
          
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholder='password'
            style={styles.input}
            secureTextEntry= {true}
          />
        </View>

        
        
          
        
        <Text style={styles.contraseñaolvidada}> ¿Contraseña olvidada? </Text>
       
        <TouchableOpacity style={styles.botoni}>
          <Text style={styles.buttonText}>INGRESAR</Text> 
          
        </TouchableOpacity>
      
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 70,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 16,
    color: '#64d9c5',
    fontWeight: 'normal',

  },
  titulo2: {
    fontSize: 16,
    color: "#64d9c5",
    fontWeight: 'bold'
  },

  contraseñaolvidada: {
    fontSize: 20,
    color: 'gray',
    marginTop: 30,

  },
  
  botoni: {
    
    padding: 10,
    width: '60%',
    height: 50,
    borderRadius: 10,
    marginTop: 40,
    backgroundColor: '#DE108D',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    
  },

  containerTitle: {
    flexDirection: 'row',
    
  },

  containerInput: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
    paddingBottom: 3,
    width: '80%',
  },
  input: {
    flex: 1,
    padding: 3,
    width: '80%',
    height: 50,
    marginTop: 40,
  }
});

/*<Image source={require('./img/logo.jpg')}/>*/

export default login;