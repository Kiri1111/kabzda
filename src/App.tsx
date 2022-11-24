import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRaiting";
import {UncontrolledOnOff} from './UnControledOnOff/UncontrolledOnOff';
import Counter from "./components/Counter/counter";
import Input from "./input/input";
import ControledInput from "./input/controledInput";
import {NewCounter} from "./newCounter/NewCounter";

function App() {
    console.log("App rendered")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>

            <NewCounter/>
            {/*<Input/>*/}
            {/*<ControledInput/>*/}
            {/*<Counter/>*/}
            {/*<Accordion titleValue={'Menu'}*/}
            {/*           arr={['Kir9', 'Dima', 'Kost9n', 'Banan']}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}

            {/*<UnControlledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<UncontrolledOnOff/>*/}

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
