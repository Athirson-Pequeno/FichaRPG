import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import TelaMagias from "../telas/magias";

import PersonagensRotas from "./personagemRotas";

export default function Rotas(){

    
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator 
            screenOptions={ ({route}) =>({
                tabBarLabel: ({focused, color}) => (
                    <Text style={{color: focused ? 'red' : color, fontSize:13}}>
                        {route.name}
                        </Text>
                  ),
                tabBarIcon: ({ color, size, focused }) => {
                    
                    if(route.name === 'Personagens'){
                        return <Icon name={'user'} size={size} color={focused ? 'red' : color} />
                    }else{
                        return <Icon name={'book'} size={size} color={focused ? 'red' : color} />
                    } 
                }

                

            })}>
            <Tab.Screen 
                name="Personagens"
                component={PersonagensRotas}
                options={{
                    headerStyle: {
                      backgroundColor: '#760100',
                      elevation:0
                    },
                    headerTintColor: '#fff'}}/>

            <Tab.Screen name="Magias" component={TelaMagias}
                
                options={{
                    headerStyle: {
                      backgroundColor: '#760100',
                      elevation:0
                    },
                    headerTintColor: '#fff',
                    
                  }}/>
                  
        </Tab.Navigator>

    )
}