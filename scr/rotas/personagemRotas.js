import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaPersonagens from "../telas/personagens";
import TelaPersonagem from "../telas/personagem";

const Stack = createNativeStackNavigator()

export default function PersonagensRotas(){

    return <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='PersonagensHome' component={TelaPersonagens}/>
        <Stack.Screen name='Personagem' component={TelaPersonagem}/>
    </Stack.Navigator>
}