import React, { SetStateAction } from 'react';
import style from '../ListItem/ListItem.module.scss'
import TrashIcon from '../../Icons/TrashIcon/TrashIcon'
import PencilIcon from '../../Icons/PencilIcon/PencilIcon'
import CheckIcon from '../../Icons/CheckIcon/CheckIcon'
import { ActivityItem } from '../../../types/ActivityItem';

interface Props {
    activity: string,
    createdDate: string,
    completedDate: string, 
    completed: boolean, 
    id: string,
    setActivities: React.Dispatch<SetStateAction<ActivityItem[]>>
}

function ListItem ({ activity, createdDate, completedDate, completed, id, setActivities}: Props){

    function handleComplete(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        setActivities(prevActitivies => 
            prevActitivies.map(activity => 
            {
                if (activity.id === id){
                    return {...activity, completed:true}
                }
                return activity
            }))
    }
    
    return (
        <li className={style.listItem}>
            <span>{completed.toString()}</span>
            <div className={style.listTextWrapper}>
                <span className={style.listActivity}>{activity}</span>
                <span className={style.listDate}>{createdDate.toString()}</span>
            </div>
            <div className={style.listIconsWrapper}>
                <CheckIcon 
                    type={"todolist"} 
                    onClick={handleComplete}
                />
                <PencilIcon type={"todolist"}/>
                <TrashIcon type={"todolist"}/>
            </div>
        </li>
    )
}

export default ListItem