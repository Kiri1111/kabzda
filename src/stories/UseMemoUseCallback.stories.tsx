import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


export const Example2 = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000000)
                fake++
            tempA = tempA * i
        }
        return tempA

    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <div>

        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <div>
            Result for A :{resultA}
        </div>
        <div>
            Result for B :{resultB}
        </div>
    </div>
}


const SecretBooks = (props: { books: Array<string> }) => {
    console.log('USERS')
    return <div>  {
        props.books.map((book, i) => <div key={i}>{book}</div>)
    }</div>
}

const Books = React.memo(SecretBooks)
export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['JS', 'React', 'HTML'])


    const newArr: Array<string> = useMemo(() => {
        books.filter(el => el.toLowerCase().indexOf('a'))
        return newArr
    }, [books])


    const addUser = () => {
        setBooks([...books, ('Angular')])
    }
    return <>


        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add User</button>

        <Books books={newArr}/>

    </>
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [names, setNames] = useState(['Kir9', 'Tan9', 'An9'])


    const newArray = useMemo(() => {
        const arr = names.filter(el => el.toLowerCase().indexOf('a'))
        setNames(arr)
        return arr
    }, [names])


    const addUser = () => {
        setNames([...names, ('*****')])
    }
    return <>


        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add User</button>

        <Books books={newArray}/>

    </>
}