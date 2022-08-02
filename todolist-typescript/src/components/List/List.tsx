import React from 'react';
import { ActivityItem } from '../../interfaces/ActivityItem';
import style from '../List/List.module.scss'
import ListItem from './ListItem/ListItem';



function List ({activity}:{activity:ActivityItem[]}){
    return (
        <ul className={style.todoList}>
            <ListItem/>
        </ul>
    )
}

export default List