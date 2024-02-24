/* eslint-disable react/prop-types */
import ModalBtn from "../assets/cerrar.svg"

const Modal = ({setModal, animarModal, setAnimarModal}) => {

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
        </form>
    </div>
  )
}

export default Modal