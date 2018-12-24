import React, {Component} from 'react';
import Hero from '../../Hero';
import UserRepos from './UserRepos';

class View extends Component{
	render(){
		console.log('View.js Props:',this.props);
		return(
			<div>
				<Hero {...this.props} {...this.state} user={this.props.user}/>
				<UserRepos {...this.props} {...this.state} user={this.props.user}/>
			</div>
		)
	}
}

export default View;