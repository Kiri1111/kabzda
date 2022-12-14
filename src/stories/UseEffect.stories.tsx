import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'

}
export const Example2 = () => {
    console.log("Example2")

    let [counter, setCounter] = useState<number>(1)
    //  let [countter, setCountter] = useState<number>(1)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect first render')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render +every counter change')
        document.title = counter.toString()
    }, [counter
    ])
    return <>
        Hello, {counter}
        <button onClick={() => setCounter(c => c + 1)}>+</button>

        {/*Hello, {countter}*/}
        {/*<button onClick={() => setCountter(c => c + 111)}>+</button>*/}
    </>

}