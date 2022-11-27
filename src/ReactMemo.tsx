import React, {useState} from "react";

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const SecretUsers = (props: { users: Array<string> }) => {
    console.log('USERS')
    return <div>  {
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(SecretUsers)
export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [names, setNames] = useState(['Kir9', 'Tan9', 'An9'])
    const addUser = () => {
        setNames([...names, ('*****')])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add User</button>
        <NewMessagesCounter count={counter}/>

        <Users users={names}/>

    </>
}