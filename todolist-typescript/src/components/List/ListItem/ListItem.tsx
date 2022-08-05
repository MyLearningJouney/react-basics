import React, { SetStateAction } from 'react';
import style from '../ListItem/ListItem.module.scss'
import { ActivityItem } from '../../../types/ActivityItem';
import CancelIcon from '../../Icons/CancelIcon/CancelIcon';
import PendingListItem from './PendingListItem/PendingListItem';
import TrashIcon from '../../Icons/TrashIcon/TrashIcon';
import PencilIcon from '../../Icons/PencilIcon/PencilIcon';
import CompletedListItem from './CompletedListItem/CompletedListItem';

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
}

function ListItem ({ activityItem, setActivitiesList}: Props){

    if (activityItem.status === "completed"){
        return (
            <li className={`${style.listItem} ${style.completedActivity}`}>
                <CompletedListItem activityItem={activityItem} setActivitiesList={setActivitiesList}></CompletedListItem>
            </li>
        )
    }
    else if (activityItem.status === "editing"){
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
    else {
        return (
            <li className={style.listItem}>
                <PendingListItem activityItem={activityItem} setActivitiesList={setActivitiesList}></PendingListItem>
            </li>
        )
    }
}

export default ListItem