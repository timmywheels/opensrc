import React, { Component } from 'react';
import styled from 'styled-components';

const LanguageCount = styled.li`
    width: fit-content;
    font-size: 14px;
    padding: 5px 10px;
    color: #fff;
    display: inline-block;
    text-align: center;
    margin: 5px;
    font-weight: 400;
    background: #00000055;
    box-shadow: 0px 0px 15px rgba(108, 117, 125, 0.25);
    
}`;

class LanguageCounts extends Component {
	render() {
		return (
			<div>
				<ul id={'language-counts'}>
					<LanguageCount
						id="javaScriptRepos"
						className={'badge-pill badge-warning'}
					>
						JavaScript: 0
					</LanguageCount>
					<LanguageCount
						id="pythonRepos"
						className={'badge-pill badge-warning'}
					>
						Python: 0
					</LanguageCount>
					<LanguageCount id="javaRepos" className={'badge-pill badge-warning'}>
						Java: 0
					</LanguageCount>
					<LanguageCount id="rubyRepos" className={'badge-pill badge-warning'}>
						Ruby: 0
					</LanguageCount>
					<LanguageCount id="phpRepos" className={'badge-pill badge-warning'}>
						PHP: 0
					</LanguageCount>
					<LanguageCount
						id="cPlusPlusRepos"
						className={'badge-pill badge-warning'}
					>
						C++: 0
					</LanguageCount>
					<LanguageCount id="cssRepos" className={'badge-pill badge-warning'}>
						CSS: 0
					</LanguageCount>
					<LanguageCount
						id="cSharpRepos"
						className={'badge-pill badge-warning'}
					>
						C#: 0
					</LanguageCount>
					<LanguageCount id="goRepos" className={'badge-pill badge-warning'}>
						Go: 0
					</LanguageCount>
					<LanguageCount id="cRepos" className={'badge-pill badge-warning'}>
						C: 0
					</LanguageCount>
					<LanguageCount id="otherRepos" className={'badge-pill badge-warning'}>
						Other: 0
					</LanguageCount>
				</ul>
			</div>
		);
	}
}

export default LanguageCounts;
