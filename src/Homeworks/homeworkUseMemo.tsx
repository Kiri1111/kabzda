import React, {useMemo, useState} from 'react';
import Select, {MemoSelect} from "../components/Select";
import s from './homeworkUseMemo.module.css'


export const HomeworkWithUseMemo = () => {
    console.log('1')
    const [counter, setCounter] = useState(0)
    const [country, setCountry] = useState([
        {id: 1, country: {id: 1, title: 'Belarus'}, city: 'Minsk', people: 10000},
        {id: 2, country: {id: 1, title: 'Belarus'}, city: 'Orsha', people: 1000},
        {id: 3, country: {id: 2, title: 'Russia'}, city: 'Moscow', people: 100000},
        {id: 4, country: {id: 2, title: 'Russia'}, city: 'Br9nsk', people: 1000},
        {id: 5, country: {id: 3, title: 'Ukraina'}, city: 'Kiev', people: 10000},
        {id: 6, country: {id: 3, title: 'Ukraina'}, city: 'Odessa', people: 1000},
    ])

    const oneItems = useMemo(() => {

        return country.filter(el => el.people > 1000)
    }, [counter])

    const twoItems = useMemo(() => {

        return country.filter(el => el.country.title.toLowerCase().indexOf('i') > -1)
    }, [country])

    const threeItems = useMemo(() => {

        return country.filter(el => el.country.id === 1)
    }, [country])
    const onClickHandler = () => setCounter(counter + 1)
    return (
        <div className={s.all}>
            <div className={s.one}>
                {counter}
                <button onClick={onClickHandler}>inc</button>
                <MemoSelect onChange={(newValue: number) => {

                }} items={oneItems}/>

            </div>

            <div className={s.two}>
                <MemoSelect onChange={(newValue: number) => {

                }} items={twoItems}/>
            </div>

            <div className={s.three}>
                <MemoSelect onChange={(newValue: number) => {

                }} items={threeItems}/>
            </div>

        </div>
    );
};

