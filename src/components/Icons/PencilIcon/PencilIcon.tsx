import React from 'react';
import style from '../PencilIcon/PencilIcon.module.scss'


interface Props {

    type?:"todolist" | "hide" | undefined
}

function PencilIcon ( {type} : Props ){
    if(type === "todolist"){
        return (
            <i className={`fa-solid fa-pencil ${style.listItemPencilIcon}`}/>
        )
    }
    if(type === "hide"){
        return (
            <i className={`fa-solid fa-pencil ${style.hide}`}/>
        )
    }
    else{
        return (
            <i className={"fa-solid fa-pencil"}/>
        )
    }
}


export default PencilIcon