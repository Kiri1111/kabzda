import React from 'react';

type PropsType = {
    callBack: () => void
    name: string
    disable: boolean
}
const Button = (props: PropsType) => {
    const onclickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            {<button disabled={props.disable} onClick={onclickHandler}>{props.name}</button>}
        </div>
    );
};

export default Button;