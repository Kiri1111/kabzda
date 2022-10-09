import React from "react";

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
    return (
        <div>
            <AccordionTittle title={props.titleValue}/>
            <AccordionBody />
        </div>
    );
}

type AccordionTittlePropsType = {
    title: string
}

function AccordionTittle(props: AccordionTittlePropsType) {
    console.log("AccordionTittle rendered")
    return (

        <h3> {props.title} </h3>

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