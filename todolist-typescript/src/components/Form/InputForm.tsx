import React, { useState } from 'react';
import style from '../Form/InputForm.module.scss'
import InputButton from '../Form/Button/InputButton'
import { ActivityItem } from '../../interfaces/ActivityItem';


interface Props { 
    setActivity: React.Dispatch<React.SetStateAction<ActivityItem[]>> 
}

function InputForm ({setActivity}: Props){

    const [activity, setActivities] = useState([{}]) 

    function insertActivity(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    }
    
    return (
        <form className={style.inputForm} onSubmit={insertActivity}>
            <div className={style.formContentWrapper}>
                <input
                    type="text"
                    className={style.activityInput}
                    name="activityInput"
                    id="activityInput"
                    placeholder="What you have to do today ?"
                />
                <InputButton type="submit" onClick={() => console.log('value')}/>
            </div>
        </form>
    )
}

export default InputForm
