import React, { Component } from 'react';
import styled from 'styled-components'

const SidebarSection = styled.div`
	min-height: 80vh;
	background: #fff;
	position: absolute;
	-webkit-box-shadow: 2px 2px 15px 0 #33333333;
  box-shadow: 2px 2px 15px 0 #33333333;
  border-radius: .25rem;
  margin: 10px;
  border: 2px solid #ddd;
`;


class Sidebar extends Component{
	render(){
		return(
			<div>
			{/*<div className="row">*/}
				<SidebarSection className="col-md-3 mt-5">
					<p className={"text-center pt-3"}>Sidebar</p>
				</SidebarSection>
			{/*</div>*/}
			</div>
		)
	}
}

export default Sidebar;