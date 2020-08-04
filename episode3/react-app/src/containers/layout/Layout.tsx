import React, { Component } from 'react';
import Navigation from '../../component/Navigation';
class Layout extends Component {

    constructor(props: any){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Navigation></Navigation>
            </React.Fragment>
        )
    }

}

export default Layout;