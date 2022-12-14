import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'

}
export const Example1 = () => {
    console.log("Example1")
    // let initialValue: number = useMemo(megaData, [])
    let [counter, setCounter] = useState<number>(megaData)
    

    function megaData() {
        console.log('megaData')
        return 87788738378378
    }

    //   const changer = (state: number) => state + 1
    return <>
        {counter}
        <button onClick={() => setCounter(c => c + 1)}>+</button>
    </>

}