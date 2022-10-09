import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendered")
    return (
        <div>
            <PageTittle title={'This is A P P component'}/>
            <PageTittle title={"My friends"}/>
            <Rating value={3}/>
            <Accordion titleValue={'Menu'}/>
            <Accordion titleValue={'Users'}/>
            <Rating value={1}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTittle = {
    title: string
}

function PageTittle(props:PageTittle) {
    return (
        <h1>{ props.title }</h1>
    );
}


export default App;
