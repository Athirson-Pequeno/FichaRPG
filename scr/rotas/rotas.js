import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


import Icon from 'react-native-vector-icons/Feather';
import TelaMagias from "../telas/magias";

import PersonagensRotas from "./personagemRotas";

export default function Rotas(){

    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: '#000000',
          secondary: '#760100',
        },
      };

    
    const Tab = createBottomTabNavigator();
    return (
        <PaperProvider  theme={theme}>
        <NavigationContainer >
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
        </NavigationContainer>
        </PaperProvider>

    )
}