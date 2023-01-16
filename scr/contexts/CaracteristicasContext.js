
import { createContext, useState } from "react";

export const CaracteristicasContext = createContext({})

export function AlteracaoProvider( {children} ){

    const [alteracao, setAlteracao] = useState(false)

    return(
        <CaracteristicasContext.Provider value={{
            alteracao,
            setAlteracao
        }}>
            {children}
        </CaracteristicasContext.Provider>
    )

}