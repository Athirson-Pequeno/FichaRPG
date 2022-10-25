import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import TelaMagias from "../telas/magias";
import TelaPersonagem from "../telas/personagem";


export default function Rotas(){
    
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer >
            <Tab.Navigator screenOptions={ ({route}) =>({
                
                tabBarIcon: ({ color, size }) => {
                    if(route.name === 'Personagem'){
                        return <Icon name={'user'} size={size} color={color} />

                    }else{
                        return <Icon name={'book'} size={size} color={color} />
                    } 
                }
            })}>
                <Tab.Screen name="Personagem" component={TelaPersonagem}/>
                <Tab.Screen name="Magias" component={TelaMagias}/>
            </Tab.Navigator>
        </NavigationContainer>

    )
}