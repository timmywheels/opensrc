import React, { Component } from 'react';
import Header from '../../partials/Header'
import Hero from '../../partials/Hero';

class View extends Component{
    render() {
        return(
            <div>
                <Header/>
                <Hero/>
                <h1>Account Page</h1>
            </div>
        )
    }
}

export default View;