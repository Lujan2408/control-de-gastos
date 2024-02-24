/* eslint-disable react/prop-types */
import ModalBtn from "../assets/cerrar.svg"
import { useState } from "react"

const Modal = ({setModal, animarModal, setAnimarModal}) => {
    
    const [nombreGasto, setNombreGasto] = useState('')
    const [cantidadGasto, setCantidadGasto] = useState('')
    const [categoria, setCategoria] = useState('')

    const cerarModal = () => {
        setModal(false)
        setAnimarModal(false)
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

        <form className={`formulario ${animarModal ? "animar" : ''}`}>
            <legend>Nuevo Gasto</legend>

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