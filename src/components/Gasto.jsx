import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import'react-swipeable-list/dist/styles.css'
import { formatearFecha } from '../helpers'
import { formatearCantidad } from '../helpers'

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

const Gasto = ({ gasto, setGastoEditar }) => {
    const { nombreGasto, categoria, cantidadGasto, id, fecha } = gasto 

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => console.log('Eliminar')}>
                Eliminar    
            </SwipeAction> 
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
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

                    <div className='cantidad-gasto'>{formatearCantidad(cantidadGasto)}</div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto