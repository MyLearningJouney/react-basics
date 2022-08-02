import React from 'react';
import style from '../ListItem/ListItem.module.scss'
import TrashIcon from '../../Icons/TrashIcon'
import PencilIcon from '../../Icons/PencilIcon'
import CheckIcon from '../../Icons/CheckIcon'


function ListItem (){
    return (
        <li className={style.listItem}>
            <div className={style.listTextWrapper}>
                <span className={style.listActivity}>Hoje eu quero estudar</span>
                <span className={style.listDate}>23/07/2022</span>
            </div>
            <div className={style.listIconsWrapper}>
                <CheckIcon/>
                <PencilIcon/>
                <TrashIcon/>
            </div>
        </li>
    )
}

export default ListItem