import React, {useReducer} from "react";
import {accordionReducer} from "./AccordionReducer";

type UnControlledAccordionPropsType = {
    titleValue: string
}


export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false);
    let [state, dispatchCollapsed] = useReducer(accordionReducer, {collapsed: true});
    let OnClickHandler = () => {
        dispatchCollapsed({type: 'TOGGLE-COLLAPSED'})
    }
    return <div>
        <AccordionTittle OnClickHandler={OnClickHandler} title={props.titleValue}/>
        {state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTittlePropsType = {
    title: string
    OnClickHandler: () => void
}

function AccordionTittle(props: AccordionTittlePropsType) {
    return (
        <h3 onClick={props.OnClickHandler}>-- {props.title} --</h3>
    );
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UnControlledAccordion;