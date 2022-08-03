import React from 'react';
import style from '../ListItem/ListItem.module.scss'
import TrashIcon from '../../Icons/TrashIcon/TrashIcon'
import PencilIcon from '../../Icons/PencilIcon/PencilIcon'
import CheckIcon from '../../Icons/CheckIcon/CheckIcon'
import { ActivityItem } from '../../../types/ActivityItem';


function ListItem ({ activity, createdDate, completedDate, completed, id}: ActivityItem){
    return (
        <li className={style.listItem} key={id}>
            <div className={style.listTextWrapper}>
                <span className={style.listActivity}>{activity}</span>
                <span className={style.listDate}>{createdDate.toString()}</span>
            </div>
            <div className={style.listIconsWrapper}>
                <CheckIcon type={"todolist"}/>
                <PencilIcon type={"todolist"}/>
                <TrashIcon type={"todolist"}/>
            </div>
        </li>
    )
}

export default ListItem