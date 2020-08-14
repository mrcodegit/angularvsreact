import React from 'react';
import classes from './Person.module.scss';
const person = (props: any) => {
    return (
        <div className={`${props.cls} ${classes.Person}`}>
            <h2>{props.name}</h2>
        </div>
    )
}

export default person;