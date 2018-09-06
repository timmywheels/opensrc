import React, { Component } from "react";
import UserInfo from './UserInfo';
import LanguageCounts from "./LanguageCounts";

class MainContent extends Component {
    render() {
        return (
            <div>
                <UserInfo/>
                <div className="col-md-12">
                    <h2 className={'col-md-12'} id={"latest-projects-title"}>Latest Projects</h2>
                    <LanguageCounts/>
                    <div className={'row'} id="latest-projects">
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContent;