import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import TelaLogin from "../telas/login";
import TelaCadastro from "../telas/cadastro";
import Rotas from "./rotas";


const Stack = createNativeStackNavigator()

export default function RotaInicial(){

    return (
    <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name='TelaLogin' component={TelaLogin} 
                options={{headerStyle:{
                    backgroundColor: '#760100',
                    elevation:0
                },
                title:"Login",
                headerTintColor:"#fff"
        }}/>
        
                <Stack.Screen name='TelaCadastro' component={TelaCadastro} 
                options={{headerStyle:{
                    backgroundColor: '#760100',
                    elevation:0
                },
                title:"Cadastre-se",
                headerTintColor:"#fff"
        }}/>
           
            <Stack.Screen name='Rotas' component={Rotas} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
)}