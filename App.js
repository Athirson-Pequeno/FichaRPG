import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import { AlteracaoProvider } from "./scr/contexts/CaracteristicasContext";
import RotaInicial from "./scr/rotas/rotaInicial";

export default function App(){

return (
        
        <AlteracaoProvider>
                <PaperProvider>
                        <RotaInicial/>    
                </PaperProvider>
        </AlteracaoProvider>
)}