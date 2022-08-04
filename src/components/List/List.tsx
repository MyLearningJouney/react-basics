import React, { SetStateAction } from 'react';
import { ActivityItem } from '../../types/ActivityItem';
import style from '../List/List.module.scss'
import ListItem from './ListItem/ListItem';

interface Props{
    activities: ActivityItem[]
    setActivities: React.Dispatch<SetStateAction<ActivityItem[]>>
}    

function List ({ activities, setActivities }: Props){

    return (
        <ul className={style.todoList}>
        {  
            activities.map(activity => (            
            <ListItem 
                key={activity.id}
                id = {activity.id}
                activity={activity.activity} 
                createdDate={activity.createdDate} 
                completedDate={activity.completedDate} 
                completed={activity.completed} 
                setActivities = {setActivities}
            />
            ))
        }
        </ul>
    )
}

export default List