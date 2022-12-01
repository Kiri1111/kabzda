import React, {useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    id: number
    country: { id: number, title: string }
    city: string
    people: number
}

type SelectType = {
    value: any
    onChange: any
    items: ItemType[]
}


const Select = (props: SelectType) => {

    const [active, setActive] = useState(false)
    const [hoveredValue, setHoveredValue] = useState(1)
    const onClickHandler = () => setActive(!active)


    const selectItem = props.items.find(i => i.id === props.value)

    return (
        <div className={s.select}>
            {/*<span className={s.main} onClick={onClickHandler}>{"ddd"}</span>*/}
            <span className={s.main} onClick={onClickHandler}>{selectItem && selectItem.city}</span>
            {active &&
                <div className={s.items}>
                    {props.items.map(i => <div
                            className={s.item + ' ' + (hoveredValue === i.id ? s.select : ' ')}
                            key={i.id}
                            onMouseEnter={() => {
                                setHoveredValue(i.id)
                            }}
                            onClick={() => {
                                props.onChange(i.id);
                                onClickHandler();
                            }}
                        >
                            {i.country.title}
                            <span>{i.city}</span>
                            <span>{i.people}</span>
                        </div>
                    )}
                </div>}
        </div>
    );
};

export default Select;