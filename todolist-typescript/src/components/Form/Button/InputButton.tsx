import React from 'react';
import style from '../Button/InputButton.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void
} 

function InputButton ({ onClick, type }: Props){
    return (
        <button onClick={onClick} className={style.addBtn} type={type}>
            <i className="fa-solid fa-check"></i>
        </button>
    )
}

export default InputButton