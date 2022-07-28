import React from 'react';
import style from '../Button/InputButton.module.scss'



function InputButton (){
    return (
        <button className={style.addBtn} type="submit">
            <i className="fa-solid fa-check"></i>
        </button>
    )
}

export default InputButton