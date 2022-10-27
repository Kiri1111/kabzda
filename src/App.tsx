import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRaiting";

function App() {
    console.log("App rendered")
    return (
        <div className={'App'}>

            {/*<Accordion titleValue={'Menu'} collapsed={false}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}

            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff/>
            <OnOff/>
            <OnOff/>

        </div>
    );
}

type PageTittle = {
    title: string
}

function PageTittle(props: PageTittle) {
    return (
        <h1>{props.title}</h1>
    );
}


export default App;
