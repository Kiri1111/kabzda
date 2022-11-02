import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true);
    let OnClickHandler = () => {
        setCollapsed(!collapsed)
    }
    return <div>
        <AccordionTittle OnClickHandler={OnClickHandler} title={props.titleValue}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTittlePropsType = {
    title: string
    OnClickHandler: () => void
}

function AccordionTittle(props: AccordionTittlePropsType) {
    return (
        <h3 onClick={props.OnClickHandler}>----- {props.title} -----</h3>
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