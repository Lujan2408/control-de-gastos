import React from 'react'
import { formatearFecha } from '../helpers'

import iconoAhorro from '../assets/icono_ahorro.svg'
import iconoCasa from '../assets/icono_casa.svg'
import iconoComida from '../assets/icono_comida.svg'
import iconoGastos from '../assets/icono_gastos.svg'
import iconoOcio from '../assets/icono_ocio.svg'
import iconoSalud from '../assets/icono_salud.svg'
import iconoSuscripciones from '../assets/icono_suscripciones.svg'

const diccionarioIconos = {
    ahorro: iconoAhorro,
    casa: iconoCasa, 
    comida: iconoComida, 
    gastos: iconoGastos,
    ocio: iconoOcio,
    salud: iconoSalud,
    suscripciones: iconoSuscripciones

}

const Gasto = ({ gasto }) => {
    const { nombreGasto, categoria, cantidadGasto, id, fecha } = gasto 

  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            
            <img 
                src={diccionarioIconos[categoria]} 
                alt="Icono Gasto" 
            />

            <div className='descripcion-gasto'>
                <p className='categoria'>{categoria}</p>
                <p className='nombre-gasto'>{nombreGasto}</p>
                <p className="fecha-gasto">
                    Agregado el: {''}
                    <span>{formatearFecha(fecha)}</span>
                </p>
            </div>
        </div>

        <div className='cantidad-gasto'>${cantidadGasto}</div>
    </div>
  )
}

export default Gasto