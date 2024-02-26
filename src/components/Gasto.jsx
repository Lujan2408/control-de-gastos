import React from 'react'

const Gasto = ({ gasto }) => {
    const { nombreGasto, categoria, cantidadGasto, id } = gasto 

  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            
            <div className='descripcion-gasto'>
                <p className='categoria'>{categoria}</p>
                <p className='nombre-gasto'>{nombreGasto}</p>
            </div>

        </div>
    </div>
  )
}

export default Gasto