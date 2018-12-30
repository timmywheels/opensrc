import React, {Component} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	background: #dddddd80;
	border-radius: 4px;
	margin-top: 20px;

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

// let username = '';

class SearchBar extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit();
	};

	handleChange = (e) => {
		this.props.onChange(e.target.value);
	};

	render() {
		console.log("SearchBar.js Props:", this.props);
		return (
			<div className={'col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12'}>
				<StyledForm onSubmit={this.handleSubmit} className={'form-inline'} id={"usernameForm"} name={"username"}>
					<input
						type="text"
						id="usernameInput"
						className={'form-control col-sm-9'}
						onChange={this.handleChange}
						placeholder="Search GitHub Username"
						required
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
