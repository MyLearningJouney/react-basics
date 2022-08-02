import React from 'react';
import style from '../List/List.module.scss'
import ListItem from './ListItem/ListItem';



function List (){
    return (
        <ul className={style.todoList}>
            <ListItem/>
        </ul>
    )
}

export default List