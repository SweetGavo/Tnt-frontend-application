import React, {useState} from 'react';
import style from '../styles/modal.module.scss';

function Modal({children,open=false,onClose=()=>true}) {
    const [openModal,setModalStatus] = useState(open);
    function changeModalState(){
        setModalStatus(false)
        onClose()
    }
    return (
        <div className={`${style.modal} ${open?style.open:''}`}>
        <div className={style.body}>
                {
                    children
                }
            </div>
        </div>
    );
}

export default Modal;