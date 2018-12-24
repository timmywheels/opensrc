import React, {Component} from 'react';
import Header from "../../Header";
import Hero from '../../Hero';
import UserRepos from './UserRepos';

class View extends Component{
	render(){
		console.log('View.js Props:',this.props);
		return(
			<div>
				<Header/>
				<Hero {...this.props} {...this.state} user={this.props.user} onChange={this.props.onChange} onSubmit={this.props.onSubmit}/>
				<UserRepos {...this.props} {...this.state} user={this.props.user} onChange={this.props.onChange} onSubmit={this.props.onSubmit}/>
			</div>
		)
	}
}

export default View;