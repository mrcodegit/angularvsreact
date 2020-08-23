import React, { Component } from 'react';

const myLazy = (cmpCallback: any) => {

    return class extends Component {

        state = {
            component: null
        };

        componentDidMount() {
            cmpCallback().then((asyncComponent: any) => {
                this.setState({ component: asyncComponent.default })
            });
        };

        render() {
            const CMP: any = this.state.component;
            return CMP ? <CMP {...this.props} /> : <div>loading...</div>;
        }

    }

}

export default myLazy;