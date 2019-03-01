import React, {Component} from 'react';
import Header from "../../partials/Header";
import Hero from '../../partials/Hero';
import UserRepos from './UserRepos';
import UserInfo from "./UserInfo"

class View extends Component{
	render(){
		console.log('View.js Props:',this.props);
		return(
			<div>
				<Header marginBottom={-60}/>
				<Hero {...this.props} {...this.state} user={this.props.user} onChange={this.props.onChange} onSubmit={this.props.onSubmit}/>
				<UserRepos {...this.props} {...this.state} user={this.props.user} onChange={this.props.onChange} onSubmit={this.props.onSubmit}>
					<UserInfo {...this.props} {...this.state} user={this.props.user} onChange={this.props.onChange} onSubmit={this.props.onSubmit}/>
				</UserRepos>
			</div>
		)
	}
}

export default View;