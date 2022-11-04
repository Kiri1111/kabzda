import React from 'react';
import s from './counter.module.css'

type PropsType = {
    callBack: () => void
    name: string
    disable: boolean
}
const Button = (props: PropsType) => {
    const onclickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            {<button className={s.buttons} disabled={props.disable} onClick={onclickHandler}><b>{props.name}</b>
            </button>}
        </div>
    );
};

export default Button;