import React, {useState} from 'react';
import SuperButton from "./Payload/SuperButton";
import InputBlock from "./Payload/InputBlock";
import s from "./newCounter.module.css"

export const NewCounter = () => {
    const [value, setValue] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [error, setError] = useState(false)

    const incOnclickHandler = () => {
        setValue(value => value + 1)
    }
    const resetOnclickHandler = () => setValue(min)
    const setOnclickHandler = () => setValue(min)
    const onChangeMinHandler = (minValue: number) => {
        setMin(minValue)
        max <= min ? setError(true) : setError(false)
    }
    const onChangeMaxHandler = (max: number) => {
        setMax(max)
        max <= min ? setError(true) : setError(false)
    }
    return (
        <div className={s.allCounter}>
            <div className={max === value ? s.valueMax : s.value}>
                {error ? <div className={s.errorText}>'incorrect data'</div> : value}
            </div>
            <div className={s.buttonsValue}>
                <SuperButton disabled={value === max || error || min < 0 || max < 0} callBack={incOnclickHandler}
                             title={"inc"}/>
                <SuperButton disabled={value < max || error} callBack={resetOnclickHandler} title={'reset'}/>
                <InputBlock
                    setOnclickHandler={setOnclickHandler}
                    onChangeMinHandler={onChangeMinHandler}
                    onChangeMaxHandler={onChangeMaxHandler}
                    min={min}
                    max={max}
                    disabled={error}
                    error={error}
                />
            </div>
        </div>
    );
};

