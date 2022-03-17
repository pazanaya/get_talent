import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

 

import Login from "./Views/login";
import VistaGeneral from "./Views/vista_general";

import React from "react";
import { logToConsole } from "react-native/Libraries/Utilities/RCTLog";
import Recuperarcontraseña from "./Views/recuperar_contraseña";

const MyNavegacion = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyNavegacion.Navigator>
        <MyNavegacion.Screen name="Login" component={Login} />
        <MyNavegacion.Screen name="Recuperarcontraseña" component={Recuperarcontraseña} />
        <MyNavegacion.Screen name="Vista General" component={VistaGeneral} />
      </MyNavegacion.Navigator>
    </NavigationContainer>
    
  
  );
}

