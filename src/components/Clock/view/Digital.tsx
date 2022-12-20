import React from 'react';

type DigitPropsType = {
    clock: any
}
export const Digital = (props: DigitPropsType) => {

    const toDigitNum = (num: number) => num < 10 ? '0' + num : num

    const hours = toDigitNum(props.clock.getHours())
    const minutes = toDigitNum(props.clock.getMinutes())
    const seconds = toDigitNum(props.clock.getSeconds())
    return (
        <div>
            {`${hours} часоу : ${minutes} хвилин : ${seconds} сякундачак`}
        </div>
    );
};

