import React, {ChangeEvent} from 'react';
import SuperButton from "./SuperButton";
import s from "../newCounter.module.css"

type InputBlockType = {
    min: number
    max: number
    disabled: boolean
    onChangeMinHandler: (minValue: number) => void
    onChangeMaxHandler: (maxValue: number) => void
    setOnclickHandler: () => void
    error: boolean
}

const InputBlock = (props: InputBlockType) => {

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => props.onChangeMinHandler((Number(e.currentTarget.value)))
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => props.onChangeMaxHandler((Number(e.currentTarget.value)))


    return (
        <div className={s.inputs}>

            <div className={s.title}> {'max value :'}</div>
            <input autoFocus
                   className={props.error || props.max < 0 ? s.errorInput : s.maxInput}
                   value={props.max} type={"number"}
                   onChange={onChangeMaxHandler}
            />
            <div className={s.title}> {'min value :'}</div>
            <input autoFocus
                   className={props.error || props.min < 0 ? s.errorInput : s.minInput}
                   value={props.min} type={"number"}
                   onChange={onChangeMinHandler}
            />
            <div className={s.buttonSet}>
                <SuperButton disabled={props.disabled || props.min < 0 || props.max < 0}
                             callBack={props.setOnclickHandler} title={'set'}/>
            </div>
        </div>
    );
};

export default InputBlock;