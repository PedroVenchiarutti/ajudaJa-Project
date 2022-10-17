import React from "react";

const Modal = ({closeModal, confirmModal}) => { 
    return(
        <div className=" w-[40%] fixed bg-[#eee] top-[25%] left-[50%] p-10 translate-x-[-50%]   ">
            <div className="modalContainer">
                <button onClick={() => closeModal(false)}>X</button>
                <div className="title">
                    <h1>Tem certeza que deseja alterar suas Informações?</h1>
                </div>
                <div className="body">
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Cancelar</button>
                    <button><a href={confirmModal}>Confirmar</a></button>
                </div>
            </div>
        </div>
    )
}

export default Modal