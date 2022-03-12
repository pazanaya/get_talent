import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./views/login";
import VistaGeneral from "./views/vista_general";
import RecuperarContraseña from "./Views/recuperar_contraseña"

import React from "react";

const MyNavegacion = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyNavegacion.Navigator>
        <MyNavegacion.Screen name="Login" component={Login} />
        <MyNavegacion.Screen name="Vista General" component={VistaGeneral} />
        <MyNavegacion.Screen name="Recuperar Contraseña" component={RecuperarContraseña} />
        
      </MyNavegacion.Navigator>
    </NavigationContainer>
  );
}

