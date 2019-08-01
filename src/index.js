import React, { Component } from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';



class Index extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>Index</div>
        )
    }

}

serviceWorker.unregister();

export default Index;