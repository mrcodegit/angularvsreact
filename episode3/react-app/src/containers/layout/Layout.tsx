import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navigation from '../../component/Navigation/Navigation';
import Cities from '../Cities/Cities';
import classes from './Layout.module.scss';

const Heroes = React.lazy(() => import("../Heroes/Heroes"));

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
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route path="/heroes" component={Heroes} />
                                <Route path="/cities" component={Cities} />
                                <Route exact path="/">
                                    <Redirect to="/citiess"></Redirect>
                                </Route>
                            </Switch>
                        </Suspense>
                    </main>
                </div>
            </Router>

        )
    }
}

export default Layout;