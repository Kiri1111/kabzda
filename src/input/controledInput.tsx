import React, {ChangeEvent, useState} from 'react';

const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('hello')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.currentTarget.value
        setParentValue(text)
    }


    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)

    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)

    }

    return (
        <div>
            <input value={parentValue} onChange={onChangeHandler}/>
            <span>{parentValue}</span>

            <select value={selectValue} onChange={onChangeSelectHandler}>
                <option>none</option>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Moscow</option>
                <option value={'3'}>Kiev</option>


            </select>


        </div>

    );
};

export default ControlledInput;