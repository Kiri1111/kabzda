import {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
}


export function UncontrolledOnOff(props: PropsType) {

    let [on, setOn] = useState<boolean>(false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '30px',
        padding: '3px',
        backgroundColor: on ? 'green' : 'white'

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '3px',
        marginLeft: '3px',
        backgroundColor: on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50px',
        border: '7px solid black',
        display: 'inline-block',
        margin: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={onClicked}>On
        </div>
        <div style={offStyle} onClick={offClicked}>Off
        </div>
        <div style={indicatorStyle}></div>
    </div>


}