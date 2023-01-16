import React from "react";
import Rotas from "./scr/rotas/rotas";
import { AlteracaoProvider } from "./scr/contexts/CaracteristicasContext";
import { SafeAreaView } from "react-native";

export default function App(){

return (
        <AlteracaoProvider>
                <Rotas/>    
        </AlteracaoProvider>
)}