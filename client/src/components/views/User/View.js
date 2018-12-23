import React, {Component} from 'react';
import UserRepos from './UserRepos';

class View extends Component{
	render(){
		console.log('View.js Props:',this.props);
		return(
			<div>
				<UserRepos user={this.props.user}/>
			</div>
		)
	}
}

export default View;