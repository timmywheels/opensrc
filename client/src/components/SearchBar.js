import React, {Component} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	background: #dddddd80;
	border-radius: 4px;
	margin-top: 50px;

	@media all and (max-width: 576px) {
		input#usernameInput {
			border-radius: 4px 4px 0 0 !important;
			text-align: center;
		}
		input#submitBtn {
			border-radius: 0 0 4px 4px !important;
		}
	}

	input[type='text'] {
		outline: none;
		border: none;
		border-radius: 4px 0 0 4px;
		height: 50px;
		font-size: 20px;
		background: #ffffff0;
	}

	input[type='submit'] {
		border-radius: 0 4px 4px 0;
		height: 50px;
		letter-spacing: 2px;
		background-color: #86d07a;
		border-color: #86d07a;
	}

	input[type='text']::-webkit-input-placeholder {
		color: #00529473;
	}

	.form-control:focus {
		border: none !important;
		box-shadow: none !important;
	}
`;

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit() {
		this.setState({
			username: this.state.username
		})
	}
	handleChange(e) {
		this.setState({
			username: e.target.value
		});
		console.log(e.target.value);
	}

	render() {
		return (
			<div className={'col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12'}>
				<StyledForm onSubmit={this.handleSubmit} className={'form-inline'} id={"usernameForm"} name="username" action={`/user/${this.state.username}`}>
					<input
						type="text"
						id="usernameInput"
						className={'form-control col-sm-9'}
						value={this.state.username}
						onChange={this.handleChange}
						placeholder="Search GitHub Username"
					/>
					<input
						type="submit"
						id="submitBtn"
						className={'btn btn-success col-sm-3'}
						value="SEARCH"
					/>
				</StyledForm>
			</div>
		);
	}
}

export default SearchBar;
