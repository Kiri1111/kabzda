import React, {useState, MouseEvent, useMemo} from 'react';
import './App.css';
import Counter from "./components/Counter/counter";
import {NewCounter} from "./newCounter/NewCounter";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./store";
import {changeConditionAC, VisionStateType} from "./counters-reducer/SetVisionReducer";
import {Clock, ResetUseEffectExample} from "./components/Clock/clock";

function App() {
    // const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    // const [switchOn, setSwitchOn] = useState<boolean>(false)
    // const [value, setValue] = useState('1')
    const dispatch = useDispatch()
    const vision = useSelector<rootReducerType, boolean>(state => state.vision.condition)
    const onClickCounterHandler = () => {
        dispatch(changeConditionAC())
    }
    return (
        <div className={'App'}>
            <button onClick={onClickCounterHandler}>set counter</button>
            {vision ? <Counter/> :
                <NewCounter/>}
            < Clock/>
            <ResetUseEffectExample/>
        </div>

    );
}

// type PageTittle = {
//     title: string
// }
//
// function PageTittle(props: PageTittle) {
//     return (
//         <h1>{props.title}</h1>
//     );
// }


export default App;
