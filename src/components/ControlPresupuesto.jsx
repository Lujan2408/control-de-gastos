import { useState, useEffect } from "react"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlPresupuesto = ({ gastos, presupuesto }) => {
 
    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible ] = useState(0)
    const [gastado, setGastado] = useState(0)
    

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidadGasto + total, 0) // Calcular el total gastado
        const totalDisponible = presupuesto - totalGastado // Calcular el total disponible 

        // Calcular el porcentaje gastado 
        const nuevoPorcentaje = (( (presupuesto - totalDisponible) /presupuesto ) * 100).toFixed(2)  

        setGastado(totalGastado)
        setDisponible(totalDisponible)

        // SetTimeOut para la grafica 
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1300);

    }, [gastos, presupuesto])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP'
        })
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <CircularProgressbar 
            value={porcentaje}
        />

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)} 
            </p>
            <p>
                <span>Disponible: </span> {formatearCantidad(disponible)} 
            </p>
            <p>
                <span>Gastado: </span> {formatearCantidad(gastado)} 
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto