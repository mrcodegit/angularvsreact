import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navigation from '../../component/Navigation/Navigation';
import classes from './Layout.module.scss';
import myLazy from '../../hoc/myLazy';

const Heroes = React.lazy(() => import('../Heroes/Heroes'));
const Cities = myLazy(() => import('../Cities/Cities'));

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
                        <Suspense fallback="loading...">
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