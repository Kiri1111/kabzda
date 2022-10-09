import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendered")
    return (
        <div>
            <AppTittle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTittle() {
    return (
        <>This is A P P component</>
    );
}


export default App;
