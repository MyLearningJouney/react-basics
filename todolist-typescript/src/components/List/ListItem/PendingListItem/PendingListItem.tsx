import React, { SetStateAction } from 'react';
import { ActivityItem } from '../../../../types/ActivityItem';
import CheckIcon from '../../../Icons/CheckIcon/CheckIcon';
import PencilIcon from '../../../Icons/PencilIcon/PencilIcon';
import TrashIcon from '../../../Icons/TrashIcon/TrashIcon';
import handleComplete from './IconHandlers/handleCompleteIcon';
import style from '../PendingListItem/PendingListItem.module.scss'

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
}

function PendingListItem ({ activityItem, setActivitiesList}: Props){

    function handleDelete(event:React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        setActivitiesList(prevActitivies => 
            prevActitivies.filter(activity => activity.id !== activityItem.id))    
    }


    return(
            <>
                <div className={style.listTextWrapper}>
                    <span className={style.listActivity}>{activityItem.activity}</span>
                    <span className={style.listDate}>{activityItem.createdDate.toString()}</span>
                </div>
                <div className={style.listIconsWrapper}>
                    <CheckIcon 
                        type={"todolist"} 
                        onClick={event => handleComplete({event,setActivitiesList,activityItem})}
                    />
                    <PencilIcon type={"todolist"}/>
                    <TrashIcon type={"todolist"} onClick={handleDelete}/>
                </div>
            </>
        )
    }

export default PendingListItem