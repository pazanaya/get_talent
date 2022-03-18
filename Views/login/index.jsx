import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Button, Linking, Image,} from 'react-native';

import React from 'react';





const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>   
        <View style={styles.containerTitle}>
          <Text style={styles.titulo}> INICIAR </Text>
          <Text style={styles.titulo2}> SESIÓN </Text>  
        </View>

        <View>
          <Image style= {styles.image} source={require('../../assets/logo.jpg')}
          />

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

        <TouchableOpacity 
            style = {styles.botonc}
            onPress={() => navigation.navigate("Recuperarcontraseña")}      
        >
            <Text style={styles.buttonText2}> ¿Contraseña olvidada? </Text>
    
        </TouchableOpacity>

       
        <TouchableOpacity style={styles.botoni} onPress={() => navigation.navigate('Vista General')}>
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
    fontSize: 20,
    color: '#64d9c5',
    fontWeight: 'normal',

  },
  titulo2: {
    fontSize: 20,
    color: "#64d9c5",
    fontWeight: 'bold'
  },

  buttonText2: {
    fontSize: 16,
    color: '#c4c4c4',

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
  },
  botonc: {
    padding: 10,
    width: '60%',
    height: 50,
    borderRadius: 10,
    marginTop: 40,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    height: 200,
    width: 200,
  }

});

export default Login;

