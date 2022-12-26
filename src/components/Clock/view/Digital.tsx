import React from 'react';

type DigitPropsType = {
    clock: Date
}
export const Digital: React.FC<DigitPropsType> = ({clock}) => {

    const toDigitNum = (num: number) => num < 10 ? '0' + num : num

    const hours = toDigitNum(clock.getHours())
    const minutes = toDigitNum(clock.getMinutes())
    const seconds = toDigitNum(clock.getSeconds())
    return (
        <div>
            {`${hours} часоу : ${minutes} хвилин : ${seconds} сякундачак`}
        </div>
    );
};

