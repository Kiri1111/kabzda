import React, {useMemo, useState} from 'react';
import Select from "../components/Select";
import s from './homeworkUseMemo.module.css'


export const HomeworkWithUseMemo = () => {
    const [country, setCountry] = useState([
        {id: 1, country: {id: 1, title: 'Belarus'}, city: 'Minsk', people: 10000},
        {id: 2, country: {id: 1, title: 'Belarus'}, city: 'Orsha', people: 1000},
        {id: 3, country: {id: 2, title: 'Russia'}, city: 'Moscow', people: 100000},
        {id: 4, country: {id: 2, title: 'Russia'}, city: 'Br9nsk', people: 1000},
        {id: 5, country: {id: 3, title: 'Ukraina'}, city: 'Kiev', people: 10000},
        {id: 6, country: {id: 3, title: 'Ukraina'}, city: 'Odessa', people: 1000},
    ])
    const [value, setValue] = useState(1)
    const oneItems = useMemo(() => {
        console.log('1')
        return country.filter(el => el.people > 1000)
    }, [country])

    const twoItems = useMemo(() => {
        console.log('2')
        return country.filter(el => el.country.title.toLowerCase().indexOf('s'))
    }, [country])

    const threeItems = useMemo(() => {
        console.log('3')
        return country.filter(el => el.country.id === 1)
    }, [country])

    return (
        <div className={s.all}>
            <div className={s.one}>
                <Select value={value} onChange={(newValue: number) => {
                    setValue(newValue)
                }} items={oneItems}/>

            </div>

            <div className={s.two}>
                <Select value={value} onChange={(newValue: number) => {
                    setValue(newValue)
                }} items={twoItems}/>
            </div>

            <div className={s.three}>
                <Select value={value} onChange={(newValue: number) => {
                    setValue(newValue)
                }} items={threeItems}/>
            </div>
        </div>
    );
};

