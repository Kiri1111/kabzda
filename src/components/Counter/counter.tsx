import React, {useEffect, useState} from 'react';
import s from './counter.module.css'
import Button from "./Button";
import Input from "./Input";


function Counter() {

    const [a, setA] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const [min, setStart] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)

    const onclickHandlerInc = () => {
        // if (a <= max) {
        setA(a => a + 1);
        localStorage.setItem('number', JSON.stringify(a + 1))
        //  }
    }
    const onclickHandlerReset = () => {
        setA(min)
    }

    const setSettingCounter = () => {

        setA(min);
    }

    useEffect(() => {
        let key = localStorage.getItem('number')
        if (key) {
            let localA = JSON.parse(key)
            setA(localA)
        }
    }, [])


    return (
        <div className={s.all}>
            <div className={s.counter}>
                <div className={a === max ? s.num2 : s.num1}>{error ? 'Incorrect value!' : a}</div>
                <div className={s.buttonsArea}>

                    <div className={s.inc}>

                        <Button callBack={onclickHandlerInc}
                                name={'inc'}
                                disable={a === max}
                        />
                    </div>
                    <div className={s.reset}>
                        <Button callBack={onclickHandlerReset}
                                name={'reset'}
                                disable={a === min}
                        />
                    </div>

                </div>
            </div>
            <div>
                <Input callBack={setMax} value={max} name={'max value: '} error={error}/>
                <Input callBack={setStart} value={min} name={'start value: '}/>
                <Button callBack={setSettingCounter} name={'set'} disable={min >= max}/>
            </div>
        </div>
    );
};


export default Counter;