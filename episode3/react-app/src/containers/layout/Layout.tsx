import React, { Component } from 'react';
import Navigation from '../../component/Navigation/Navigation';
import Heroes from '../Heroes/Heroes';
import classes from './Layout.module.scss';
class Layout extends Component {
    
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={classes.Content}>
                <Navigation></Navigation>
                <main>
                    <h1>React vs Angular</h1>
                    <Heroes></Heroes>
                </main>
            </div>
        )
    }
}

export default Layout;