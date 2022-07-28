import React from 'react';
import style from '../List/List.module.scss'
import TrashIcon from '../Icons/TrashIcon'


function List (){
    return (
        <ul className={style.todoList}>
            <li className={style.listItem}>
                <div className={style.listTextWrapper}>
                    <span className={style.listActivity}>Hoje eu quero estudar</span>
                    <span className={style.listDate}>23/07/2022</span>
                </div>
                <div className={style.listIconsWrapper}>
                    <i className={`${style.checkIcon} fa-solid fa-check`}></i>
                    <i className={`${style.pencilIcon} fa-solid fa-pencil`}></i>
                    {/*<TrashIcon className={style.trashIcon}/>*/}
                </div>
            </li>
        </ul>
    )
}

export default List