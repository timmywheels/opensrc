import React, { Component } from 'react';
import styled from 'styled-components';

const DashPanelSection = styled.div`
	min-height: 80vh;
	background: #fff;
	-webkit-box-shadow: 2px 2px 15px 0 #33333333;
  	box-shadow: 2px 2px 15px 0 #33333333;
  	border-radius: .25rem;
  	// border: 2px solid #ddd;
`;

class DashPanel extends Component {
		render(){
			return(
				<div className={'col-md-8 mt-5'}>
					<DashPanelSection className="col-md-12 pt-5">
						<h1>Dashboard</h1>
					</DashPanelSection>
				</div>
			)
		}
}

export default DashPanel;