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