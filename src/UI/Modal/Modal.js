import { Fragment } from "react";
import style from "./Modal.module.css";

const Modal = props => {
    return(
        <div className={style.content}>
            <div className={style.container}>
                <div className={style.column}>
                {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal;