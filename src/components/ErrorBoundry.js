import React, { Component } from 'react'

class errorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError:false
        }
    }

    componentDidCatch(error, info) { // if anything errors out, it will run this lifecycle hook.
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return <h1>Oups... THat's not good.</h1>
        }
        return this.props.children
    }
}

export default errorBoundry
