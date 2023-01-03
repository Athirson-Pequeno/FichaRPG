
import { createContext, useState } from "react";

export const CaracteristicasContext = createContext({})

export function AlteracaoProvider( {children} ){

    const [aleracao, setAlteracao] = useState(false)

    return(
        <CaracteristicasContext.Provider value={{
            aleracao,
            setAlteracao
        }}>
            {children}
        </CaracteristicasContext.Provider>
    )

}