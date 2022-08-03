import React from 'react';
import { ActivityItem } from '../../types/ActivityItem';
import style from '../List/List.module.scss'
import ListItem from './ListItem/ListItem';

interface Props{
    activities: ActivityItem[]
}

function List ({ activities }: Props){
    return (
        <ul className={style.todoList}>
        {  
            activities.map(activity => (            
            <ListItem 
                activity={activity.activity} 
                createdDate={activity.createdDate} 
                completedDate={activity.completedDate} 
                completed={activity.completed} 
                id={activity.id} />
            ))
        }
        </ul>
    )
}

export default List