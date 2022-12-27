import {Clock} from './clock'
import {useEffect, useState} from "react";

export default {
    title: 'Clock',
    component: Clock,
}
export const ClockExample = () => {
    return <Clock/>
}
export const ResetUseEffectExamplee = () => {
    const [text, setText] = useState('')
    //console.log('Component render with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            //      console.log(e.key)
            setText((text) =>
                text + e.key
            )
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [])


    return (
        <>
            Key press: {text}
        </>
    )
}

export const KeysTrackerExamplee = () => {
    const [counter, setCounter] = useState(0)
    //console.log('Component render')
    useEffect(() => {
        //console.log('Set effect')
        return () => {
            //    console.log('Reset effect')
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
export const ClearTimeOutEffect = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('eyh')
        }, 4000)
        return () => clearTimeout(timeoutId)
    }, [])
    return (
        <>
            1
        </>
    )
}


