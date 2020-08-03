import React from 'react';
const person = (props: any) => {
    return (
        <div className={`${props.cls}`}>
            <h2>{props.name}</h2>
        </div>
    )
}

export default person;