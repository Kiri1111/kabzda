import React, {useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectType = {
    value: any
    onChange: any
    items: ItemType[]
}


const Select = (props: SelectType) => {

    const [active, setActive] = useState(false)
    const [hoveredValue, setHoveredValue] = useState()
    const onClickHandler = () => setActive(!active)


    const selectItem = props.items.find(i => i.value === props.value)

    return (
        <div className={s.select}>
            <span className={s.main} onClick={onClickHandler}>{selectItem && selectItem.title}</span>
            {active &&
                <div className={s.items}>
                    {props.items.map(i => <div
                        className={s.item + ' ' + (hoveredValue === i.value ? s.select : ' ')}
                        key={i.value}
                        onMouseEnter={() => {
                            setHoveredValue(i.value)
                        }}
                        onClick={() => {
                            props.onChange(i.value);
                            onClickHandler();
                        }}
                    >{i.title}</div>)}
                </div>}
        </div>
    );
};

export default Select;