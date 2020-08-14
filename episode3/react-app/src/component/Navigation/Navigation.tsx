import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.scss';

const navigation = (props: any) => {
    return (
        <div className={classes.Navigation}>
            <NavLink className={classes.item}
                activeClassName={classes.active}
                to="/heroes">
                Heroes
            </NavLink>
            <NavLink className={classes.item}
                activeClassName={classes.active}
                to="/cities">
                Cities
            </NavLink>
        </div>
    )
}

export default navigation;