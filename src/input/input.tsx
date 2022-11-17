import React, {ChangeEvent, useState} from 'react';

const Input = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputText = e.currentTarget.value
        setValue(inputText)
    }

    const onClickHandler = () => {
        setValue('yo')
    }


    return (
        <div>
            <input onChange={onChangeHandler}/> <span>{value}</span>

            <input/>
            <button onClick={onClickHandler}>save</button>
            -actual value:{value}
        </div>


    );
};

export default Input;