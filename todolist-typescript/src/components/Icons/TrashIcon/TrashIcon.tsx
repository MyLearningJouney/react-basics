import React from 'react';
import style from '../TrashIcon/TrashIcon.module.scss'

interface Props {

    type?:"todolist" | undefined
}

function TrashIcon ( {type} : Props ){
    return (
        <i className={type === "todolist" ? `fa-solid fa-trash ${style.listItemTrashIcon}`  : "fa-solid fa-trash"}/>
    )
}

export default TrashIcon