import React, {useEffect, useState} from 'react';
import s from './counter.module.css'
import Button from "./Button";


function Counter() {

    const [a, setA] = useState<number>(0)


    // useEffect(() => {
    //     localStorage.setItem('number', JSON.stringify(a))
    // }, [a])

    const onclickHandlerInc = () => {
        setA(a + 1)
        localStorage.setItem('number', JSON.stringify(a + 1))
    }
    const onclickHandlerReset = () => {
        setA(0)
    }


    useEffect(() => {
        let key = localStorage.getItem('number')
        if (key) {
            let newA = JSON.parse(key)
            setA(newA)
        }
    }, [])

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