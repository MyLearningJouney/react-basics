import React, { SetStateAction } from 'react';
import style from '../ListItem/ListItem.module.scss'
import TrashIcon from '../../Icons/TrashIcon/TrashIcon'
import PencilIcon from '../../Icons/PencilIcon/PencilIcon'
import CheckIcon from '../../Icons/CheckIcon/CheckIcon'
import { ActivityItem } from '../../../types/ActivityItem';
import CancelIcon from '../../Icons/CancelIcon/CancelIcon';
import PendingListItem from './PendingListItem/PendingListItem';

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
}

function ListItem ({ activityItem, setActivitiesList}: Props){

    function handleComplete(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        setActivitiesList(prevActitivies => 
            prevActitivies.map(activity => 
            {
                if (activityItem.id === activity.id){
                    return {...activity, status: "completed"}
                }
                return activity
            }))
    }

    if (activityItem.status === "pending"){
        return (
            <li className={style.listItem}>
                <PendingListItem activityItem={activityItem} setActivitiesList={setActivitiesList}></PendingListItem>
            </li>
        )
    }
    else{
        return (
            <li className={style.listItem}>
                <div className={style.listTextWrapper}>
                    <span className={style.listActivity}>{activityItem.activity}</span>
                    <span className={style.listDate}>{activityItem.createdDate.toString()}</span>
                </div>
                <div className={style.listIconsWrapper}>
                    <CancelIcon type={"todolist"}/>
                    <PencilIcon type={"hide"}/>
                    <TrashIcon  type={"hide"}/>
                </div>
            </li>
        )
    }
}

export default ListItem