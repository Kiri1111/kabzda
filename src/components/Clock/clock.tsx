import React, {useEffect, useState} from "react";
import {Digital} from "./view/Digital";
import {Analog} from "./view/Analog";

export const Clock = () => {

    const [clock, setClock] = useState(new Date())
    const [view, setView] = useState(true)
    useEffect(() => {
        const effect = setInterval(() => {
            setClock(new Date())
        }, 1000)
        return () => clearInterval(effect)
    }, [])

    return <>
        <button onClick={() => {
            setView(!view)
        }}>set clock
        </button>
        {view ? <Digital clock={clock}/> : <Analog clock={clock}/>}
        {/*<Digital clock={clock}/>*/}
        {/*<Analog clock={clock}/>*/}
    </>

}

export const ResetUseEffectExample = () => {
    const [counter, setCounter] = useState(0)
    console.log('Component render')
    useEffect(() => {
        console.log('Set effect')
        return () => {
            console.log('Reset effect')
        }
    }, [])

    const onClickHandler = () => {
        setCounter((c) => c + 1)
    }
    return (
        <>
            Hello counter, {counter}
            <button onClick={onClickHandler}>+</button>
        </>
    )
}


