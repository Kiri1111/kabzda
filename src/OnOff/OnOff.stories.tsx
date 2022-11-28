import {Rating} from "../components/Rating/Rating";
import {useState} from "react";
import {OnOff} from "./OnOff";
import {UncontrolledOnOff} from "../UnControledOnOff/UncontrolledOnOff";

export default {
    title: 'OnOff stories',
    component: Rating
}


export const OnOffStories = () => {
    const [state, setState] = useState(true)

    return (

        <OnOff on={state} onChange={(on) => {
            setState(on)
        }}/>

    )
}
