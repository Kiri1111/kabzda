import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")

    return <div>
        <AccordionTittle title={props.titleValue}
                         onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}


type AccordionTittlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTittle(props: AccordionTittlePropsType) {
    console.log("AccordionTittle rendered")
    return (

        <h3 onClick={props.onChange}> ---{props.title}--- </h3>

    );
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;