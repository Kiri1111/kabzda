import React, {useState} from 'react';
import SuperButton from "./Payload/SuperButton";
import InputBlock from "./Payload/InputBlock";

export const NewCounter = () => {
    const [value, setValue] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    const incOnclickHandler = () => {
        setValue(value => value + 1)
    }
    const resetOnclickHandler = () => setValue(min)
    const setOnclickHandler = (min)

    return (
        <div>
            <div>
                {value}
            </div>
            <div>
                <SuperButton disabled={value === max} callBack={incOnclickHandler} title={"inc"}/>
                <SuperButton disabled={value < max} callBack={resetOnclickHandler} title={'reset'}/>


                <InputBlock
                    min={min}
                    max={max}
                    // disabled={disabled}

                />

            </div>
        </div>
    );
};

