import React, {ChangeEvent, useState} from 'react';
import s from './counter.module.css'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

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
                   type={"number"} min={0}
                   autoFocus/>

        </div>
    );
};

export default Input;