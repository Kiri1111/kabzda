import React, {ChangeEvent} from 'react';
import s from './counter.module.css'

type InputPropsType = {
    error?: boolean
    name: string
    value: number
    callBack: (value: number) => void
}

const Input = (props: InputPropsType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let num = e.currentTarget.value
        props.callBack(Number(num))
    }

    return (
        <div>
            <div className={s.text}>{props.name}</div>
            <input className={props.error ? s.error : s.input} onChange={onChangeHandler} value={props.value}
                   type={"number"}
                   autoFocus/>

        </div>
    );
};

export default Input;