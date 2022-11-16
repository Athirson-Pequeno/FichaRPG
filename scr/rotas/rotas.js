import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import TelaMagias from "../telas/magias";
import TelaPersonagem from "../telas/personagem";
import TelaPersonagens from "../telas/personagens";


export default function Rotas(){
    
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer >
            <Tab.Navigator
        
            screenOptions={ ({route}) =>({
                tabBarLabel: ({focused, color, size}) => (
                    <Text style={{color: focused ? '#760100' : color, fontSize:13}}>
                        {route.name}
                        </Text>
                  ),
                tabBarIcon: ({ color, size }) => {
                    if(route.name === 'Personagem'){
                        return <Icon name={'user'} size={size} color={'#760100'} />

                    }else{
                        return <Icon name={'book'} size={size} color={'#760100'} />
                    } 
                }

                

            })}>
                <Tab.Screen 
                name="Personagem"
                component={TelaPersonagem}
                options={{
                    
                    headerStyle: {
                      backgroundColor: '#760100',
                      elevation:0
                    },
                    headerTintColor: '#fff',
                    
                  }}
                 />

                <Tab.Screen name="Magias" component={TelaMagias}
                
                options={{
                    
                    headerStyle: {
                      backgroundColor: '#760100',
                      elevation:0
                    },
                    headerTintColor: '#fff',
                    
                  }}/>
                  
                  <Tab.Screen name="Personagens" component={TelaPersonagens}
                
                    options={{
                    
                    headerStyle: {
                      backgroundColor: '#760100',
                      elevation:0
                    },
                    headerTintColor: '#fff',
                    
                  }}/>
            </Tab.Navigator>
        </NavigationContainer>

    )
}