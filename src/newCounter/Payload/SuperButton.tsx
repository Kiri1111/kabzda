import React from 'react';
import s from '../newCounter.module.css'

type SuperButtonType = {
    callBack: () => void
    title: string
    disabled: boolean
}

const SuperButton = (props: SuperButtonType) => {
    const onClickHandler = () => props.callBack()

    return (
        <div>
            <button className={s.button} disabled={props.disabled} onClick={onClickHandler}>{props.title}</button>
        </div>
    );
};

export default SuperButton;