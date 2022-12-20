import React, {useEffect, useState} from "react";
import {Digital} from "./view/Digital";

export const Clock = () => {

    const [clock, setClock] = useState(new Date())

    useEffect(() => {
        const effect = setInterval(() => {
            setClock(new Date())
        }, 1000)
        return () => clearInterval(effect)
    }, [])

    return <>

        <Digital clock={clock}/>

    </>

}