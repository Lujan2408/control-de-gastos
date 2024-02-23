/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ControlPresupuesto = ({ presupuesto }) => {

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP'
        })
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <p>Grafica aquí</p>

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)} 
            </p>
            <p>
                <span>Disponible: </span> {formatearCantidad(0)} 
            </p>
            <p>
                <span>Gastado: </span> {formatearCantidad(0)} 
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto