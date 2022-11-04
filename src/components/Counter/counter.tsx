import React, {useState} from 'react';
import s from './counter.module.css'
import Button from "./Button";


const Counter = () => {

    let [a, setA] = useState<number>(0)
    const onclickHandlerInc = () => {
        setA(a + 1)

    }
    const onclickHandlerReset = () => {
        setA(0)
    }

    return (
        <div className={s.counter}>
            <div className={a === 5 ? s.num2 : s.num1}>{a}</div>
            <div className={s.buttonsArea}>

                <div className={s.inc}>

                    <Button callBack={onclickHandlerInc}
                            name={'inc'}
                            disable={a === 5}
                    />
                </div>
                <div className={s.reset}>
                    <Button callBack={onclickHandlerReset}
                            name={'reset'}
                            disable={a === 0}
                    />
                </div>

            </div>
        </div>
    );
};

export default Counter;