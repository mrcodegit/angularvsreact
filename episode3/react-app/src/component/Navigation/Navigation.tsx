import React from 'react';
import classes from './Navigation.module.scss';
const navigation = (props: any) => {
    return (
        <ul className={classes.ul}>
            <li className={classes.active}>heroes</li>
            <li>cities</li>
        </ul>
    )
}

export default navigation;