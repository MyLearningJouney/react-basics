import React, { SetStateAction, useState } from 'react';
import { ActivityItem } from '../../../../types/ActivityItem';
import CancelIcon from '../../../Icons/CancelIcon/CancelIcon';
import CheckIcon from '../../../Icons/CheckIcon/CheckIcon';
import PencilIcon from '../../../Icons/PencilIcon/PencilIcon';
import TrashIcon from '../../../Icons/TrashIcon/TrashIcon';
import style from '../EditingListItem/EditingListItem.module.scss'
import handleCancelEdit from './IconHandler/handleCancelEdit';

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
}

function EditingListItem ({ activityItem, setActivitiesList}: Props){
    
    const [editActivity, setEditActivity] = useState<string>('');
    
    const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const currentEditActivity = event.target.value;
        setEditActivity?.(currentEditActivity)
    }

    function confirmEdit(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        console.log(editActivity)
        setActivitiesList(prevActitivies => 
            prevActitivies.map(activity => 
            {
                if (activityItem.id === activity.id){
                    return {...activity, status: "pending", activity:editActivity}
                }
                return activity
            }))
    }




    return(
            <>
                <div className={style.listTextWrapper}>
                    <input 
                        type="text" 
                        className={style.editInput}
                        name="editInput"
                        id="editInput"
                        placeholder={activityItem.activity}
                        onChange={handleEditChange}
                    />
                    <span className={style.listDate}>{activityItem.createdDate.toString()}</span>
                </div>
                <div className={style.listIconsWrapper}>
                    <CheckIcon 
                        type={"todolist"} 
                        onClick={confirmEdit}
                    />
                    <CancelIcon 
                        type={"todolist"} 
                        onClick={event => handleCancelEdit({event,setActivitiesList,activityItem})}
                    />
                    <TrashIcon 
                        type={"hide"} 
                    />
                </div>
            </>
        )
    }

export default EditingListItem