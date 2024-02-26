/* eslint-disable react/prop-types */
import { useState } from "react"
import Mensaje from "./Mensaje"
import ModalBtn from "../assets/cerrar.svg"

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {
    
    const [mensaje, setMensaje] = useState('')

    const [nombreGasto, setNombreGasto] = useState('')
    const [cantidadGasto, setCantidadGasto] = useState('')
    const [categoria, setCategoria] = useState('')

    const cerarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)            
        }, 400);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if([ nombreGasto, cantidadGasto, categoria ].includes('') || [ nombreGasto, cantidadGasto, categoria ].includes(0)) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        } 

        guardarGasto({ nombreGasto, cantidadGasto, categoria })
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={ModalBtn} 
                alt="cerrar modal" 
                onClick={cerarModal}
            />
        </div>

        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            
            <legend>Nuevo Gasto</legend>
            { mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }

            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>

                <input
                    type="text" 
                    id="nombre"
                    placeholder="Añade el Nombre del gasto"
                    value={nombreGasto}
                    onChange={e => setNombreGasto(e.target.value)}   
                />
            </div>
            
            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>

                <input
                    type="number" 
                    id="cantidad"
                    placeholder="Añade la Cantidad del gasto"
                    value={cantidadGasto}
                    onChange={e => setCantidadGasto(Number(e.target.value))}
                />
            </div>

            <div className="campo">
                <label htmlFor="categoria">Categoría</label>

                <select 
                    id="categoria"
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}
                >
                    <option value=""> -- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>

                <input 
                    type="submit"
                    value="Añadir Gasto"
                />
            </div>
        </form>
    </div>
  )
}

export default Modal