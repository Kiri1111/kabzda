import React from 'react';
import s from '../clock.module.css'

type AnalogPropsType = {
    clock: Date
}
export const Analog: React.FC<AnalogPropsType> = ({clock}) => {
    const secondsStyle = {
        transform: `rotate(${clock.getSeconds() * 6}deg)`
    }
    const minutesStyle = {
        transform: `rotate(${clock.getMinutes() * 6}deg)`
    }
    const hoursStyle = {
        transform: `rotate(${clock.getHours() * 30}deg)`
    }
    return (
        <div className={s.clock}>
            <div className={s['analog-clock']}>
                <div className={`${s.seconds} ${s.dial}`} style={secondsStyle}></div>
                <div className={`${s.minutes} ${s.dial}`} style={minutesStyle}></div>
                <div className={`${s.hours} ${s.dial}`} style={hoursStyle}></div>
            </div>
        </div>
    );
};

