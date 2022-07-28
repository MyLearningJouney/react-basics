import React from 'react';
import style from '../Form/InputForm.module.scss'
import InputButton from '../Form/Button/InputButton'


function InputForm (){
    return (
        <form className={style.inputForm}>
            <div className={style.formContentWrapper}>
                <input
                    type="text"
                    className={style.activityInput}
                    name="activityInput"
                    id="activityInput"
                    placeholder="What you have to do today ?"
                />
                <InputButton />
            </div>
        </form>
    )
}

export default InputForm
