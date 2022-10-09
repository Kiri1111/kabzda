import React from "react";

function Accordion() {
    console.log("Accordion rendered")
    return (
        <div>
            <AccordionTittle/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTittle() {
    console.log("AccordionTittle rendered")
    return (
        <h3>Меню:</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;