import React, { Component } from 'react';
import Navigation from '../../component/Navigation/Navigation';
import Heroes from '../Heroes/Heroes';
import Cities from '../Cities/Cities';
import classes from './Layout.module.scss';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class Layout extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className={classes.Content}>
                    <Navigation></Navigation>
                    <main>
                        <h1>React vs Angular</h1>
                        <Switch>
                            <Route path="/heroes">
                                <Heroes></Heroes>
                            </Route>
                            <Route path="/cities">
                                <Cities></Cities>
                            </Route>
                        </Switch>
                    </main>
                </div>
            </Router>

        )
    }
}

export default Layout;