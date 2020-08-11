import React, { Component } from 'react';
import Navigation from '../../component/Navigation';
import Heroes from './../heroes/Heroes';
class Layout extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <main>
                    <Heroes></Heroes>
                </main>
            </React.Fragment>
        )
    }

}

export default Layout;