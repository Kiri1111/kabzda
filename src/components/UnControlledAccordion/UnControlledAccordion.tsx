import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}


function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(true);

    return <div>
        <AccordionTittle title={props.titleValue}/>
        {/*<button onClick={() => {*/}
        {/*    setCollapsed(!collapsed)*/}

        {/*}}>Открыть*/}
        {/*</button>*/}
        {/*{!collapsed && <AccordionBody/>}*/}


    </div>
}


type AccordionTittlePropsType = {
    title: string
}
let [collapsed, setCollapsed] = useState(true);

function AccordionTittle(props: AccordionTittlePropsType) {

    let OnclickHandler = () => {
        setCollapsed(!collapsed)

    }
    {
        !collapsed && <AccordionBody/>
    }
    return (
        <h3 onClick={OnclickHandler}>----- {props.title} -----</h3>
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