import React from "react";
import Rotas from "./scr/rotas/rotas";
import { AlteracaoProvider } from "./scr/contexts/CaracteristicasContext";

export default function App(){

return (
        <AlteracaoProvider>
                <Rotas/>    
        </AlteracaoProvider>
)}