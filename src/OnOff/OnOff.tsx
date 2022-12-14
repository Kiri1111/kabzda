import {useState} from "react";

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


export function OnOff(props: PropsType) {

    //let on = false


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '30px',
        padding: '3px',
        backgroundColor: props.on ? 'green' : 'white'

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '3px',
        marginLeft: '3px',
        backgroundColor: props.on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50px',
        border: '7px solid black',
        display: 'inline-block',
        margin: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }
    return <div>
        <div style={onStyle} onClick={() => {
            props.onChange(true)
        }}>On
        </div>
        <div style={offStyle} onClick={() => {
            props.onChange(false)
        }}>Off
        </div>
        <div onClick={() => {

        }} style={indicatorStyle}></div>
    </div>


}