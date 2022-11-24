import React from 'react';

type SuperButtonType = {
    callBack: () => void
    title: string
    disabled: boolean
}

const SuperButton = (props: SuperButtonType) => {
    const onClickHandler = () => props.callBack()

    return (
        <div>
            <button disabled={props.disabled} onClick={onClickHandler}>{props.title}</button>
        </div>
    );
};

export default SuperButton;