import React, {Component} from 'react';
import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar';
import DashPanel from '../../views/Dashboard/DashPanel';


class View extends Component {

    render() {
        console.log("Dashboard/View.js Props:", this.props)
        console.log("Dashboard/View.js State:", this.state)
        return (
            <div>
                <Header background={"#26b0f5"} setUserData={this.props.setUserData}
                        setGitHubId={this.props.setGitHubId} {...this.state} />
                <div className="container px-lg-5">
                    <div className="row justify-content-center">
                        <Sidebar username={""} repos={this.props.user.repos} {...this.props} avatar/>
                        <DashPanel {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default View;