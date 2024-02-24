/* eslint-disable no-unused-vars */
import { useState } from "react" 
import Header from "./components/Header"
import IconoNuevoGasto from "./assets/nuevo-gasto.svg"

function App() {

  const [presupuesto, setPresupuesto] = useState(0) 
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false) 

  return (
    <>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && ( 
        <div className="nuevo-gasto">
          <img 
            src={IconoNuevoGasto} 
            alt="icono nuevo gasto" 
          />
        </div> 
      )}
    </>
  )
}

export default App
