import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import login from "./Views/login";
import VistaGeneral from "./Views/vista_general";
import RecuperarContraseña from "./Views/recuperar_contraseña"

import React from "react";

const MyNavegacion = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyNavegacion.Navigator>
        <MyNavegacion.Screen name="Login" component={login} />
        
        
      </MyNavegacion.Navigator>
    </NavigationContainer>
  );
}

