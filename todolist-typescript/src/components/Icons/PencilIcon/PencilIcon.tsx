import React from 'react';
import style from '../PencilIcon/PencilIcon.module.scss'


interface Props {

    type?:"todolist" | undefined
}


function PencilIcon ( {type} : Props ){
    return (
        <i className={type === "todolist" ? `fa-solid fa-pencil ${style.listItemPencilIcon}`  : "fa-solid fa-pencil"}/>

    )
}

export default PencilIcon