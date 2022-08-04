import React from 'react';
import style from '../TrashIcon/TrashIcon.module.scss'

interface Props {

    type?:"todolist" | "hide" | undefined
}

function TrashIcon ( {type} : Props ){

    if(type === "todolist"){
        return (
            <i className={`fa-solid fa-trash ${style.listItemTrashIcon}`}/>
        )
    }
    if(type === "hide"){
        return (
            <i className={`fa-solid fa-trash ${style.hide}`}/>
        )
    }
    else{
        return (
            <i className={"fa-solid fa-trash"}/>
        )
    }
}

export default TrashIcon


