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
            {<button className={s.buttons} disabled={props.disable} onClick={onclickHandler}>{props.name}</button>}
        </div>
    );
};

export default Button;