import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    arr: string[]
}


function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTittle title={props.titleValue}
                         arr={props.arr}
                         onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}


type AccordionTittlePropsType = {
    title: string
    onChange: () => void
    arr?: string[]
}

function AccordionTittle(props: AccordionTittlePropsType) {
    return (

        <h3 onClick={props.onChange}> ---{props.title}--- </h3>

    );
}

type PropsType = {
    title?: string
    onChange?: () => void
    arr: string[]
}

function AccordionBody(props: PropsType) {
    return <ul>
        {props.arr.map(el => <li>{el}</li>)}
    </ul>
}

export default Accordion;