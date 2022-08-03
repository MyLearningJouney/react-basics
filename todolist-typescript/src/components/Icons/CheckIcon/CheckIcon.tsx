import React from 'react';
import style from '../CheckIcon/CheckIcon.module.scss'

interface Props {

    type?:"todolist" | undefined
}


function CheckIcon ( {type} : Props ){
    return (
        <i className={type === "todolist" ? `fa-solid fa-check ${style.listItemCheckIcon}`  : "fa-solid fa-check"}/>
    )
}

export default CheckIcon