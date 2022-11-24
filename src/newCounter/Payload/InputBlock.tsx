import React, {ChangeEvent, useState} from 'react';
import SuperButton from "./SuperButton";


type InputBlockType = {
    min: number
    max: number
    disabled: boolean
}

const InputBlock = (props: InputBlockType) => {

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => (Number(e.currentTarget.value))
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => (Number(e.currentTarget.value))


    return (
        <div>
            {'min value'} <input value={props.min} type={"number"} onChange={onChangeMinHandler}/>
            {'max value'}<input value={props.max} type={"number"} onChange={onChangeMaxHandler}/>
            <SuperButton disabled={props.disabled} callBack={setOnclickHandler} title={'set'}/>

        </div>
    );
};

export default InputBlock;