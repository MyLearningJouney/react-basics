import React, { useState } from 'react';
import style from '../ListItem/ListItem.module.scss'
import TrashIcon from '../../Icons/TrashIcon/TrashIcon'
import PencilIcon from '../../Icons/PencilIcon/PencilIcon'
import CheckIcon from '../../Icons/CheckIcon/CheckIcon'
import { ActivityItem } from '../../../types/ActivityItem';


function ListItem ({ activity, createdDate, completedDate, completed, id}: ActivityItem){
    const [complete, setComplete] = useState<boolean>(false)
    return (
        <li className={style.listItem} key={id}>
            <span>{complete.toString()}</span>
            <div className={style.listTextWrapper}>
                <span className={style.listActivity}>{activity}</span>
                <span className={style.listDate}>{createdDate.toString()}</span>
            </div>
            <div className={style.listIconsWrapper}>
                <CheckIcon type={"todolist"} onClick={() => setComplete(true)}/>
                <PencilIcon type={"todolist"}/>
                <TrashIcon type={"todolist"}/>
            </div>
        </li>
    )
}

export default ListItem