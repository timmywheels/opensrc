import React, {Component} from 'react';
import Header from '../../partials/Header'
import Hero from '../../partials/Hero';

class View extends Component {
    render() {
    console.log("Dashboard/View.js Props:", this.props)
        return (
            <div>
                <Header {...this.props}/>
                <Hero/>
                <div className="container">
                    <h1 className={"text-center"}>Dashboard</h1>
                    {/*{this.props.map((prop) => {*/}
                        {/*return <p>{prop}</p>*/}
                    {/*})}*/}
                </div>
            </div>
        )
    }
}

export default View;