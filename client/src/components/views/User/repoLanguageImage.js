import JavaScript from '../../../img/javascript.svg';
import Html from '../../../img/html5.svg';
import Css from '../../../img/css3.svg';
import CPlusPlus from '../../../img/cplusplus.svg';
import C from '../../../img/c.svg';
import Java from '../../../img/java.svg';
import Php from '../../../img/php.svg';
import Python from '../../../img/python.svg';
import Ruby from '../../../img/ruby.svg';
import Swift from '../../../img/swift.svg';
import TypeScript from '../../../img/typescript.svg';
import Go from '../../../img/golang.svg';
import Github from '../../../img/github.svg';
import CSharp from '../../../img/c-sharp.svg';
import Jupyter from '../../../img/jupyter.svg';
import Haskell from '../../../img/haskell.svg';
import OCaml from '../../../img/ocaml.svg';
import Scala from '../../../img/scala.svg';
import Shell from '../../../img/bash.svg';
import Hack from '../../../img/hack.svg';
import Cuda from '../../../img/cuda.svg';
import Perl from '../../../img/perl.svg';
import Processing from '../../../img/processing.svg';
import D from '../../../img/d-lang.svg';
import Lua from '../../../img/lua-5.svg';
import Matlab from '../../../img/matlab.svg';
import GitHubFork from '../../../img/github-fork.svg';

export const setRepoLanguageImg = (repoLanguage) => {
	// Initialize langImg to be set in switch statement
	let langImg = '';

	switch (repoLanguage) {
		case 'JavaScript':
			langImg = JavaScript;
			// document.getElementById(
			// 	'javaScriptRepos'
			// ).innerHTML = `JavaScript: ${javaScriptCount.toString()}`;
			// javaScriptCount++;
			break;
		case 'Python':
			langImg = Python;
			// pythonCount++;
			// document.getElementById(
			// 	'pythonRepos'
			// ).innerHTML = `Python: ${pythonCount.toString()}`;
			break;
		case 'Java':
			langImg = Java;
			// javaCount++;
			// document.getElementById(
			// 	'javaRepos'
			// ).innerHTML = `Java: ${javaCount.toString()}`;
			break;
		case 'Ruby':
			langImg = Ruby;
			// rubyCount++;
			// document.getElementById(
			// 	'rubyRepos'
			// ).innerHTML = `Ruby: ${rubyCount.toString()}`;
			break;
		case 'PHP':
			langImg = Php;
			// phpCount++;
			// document.getElementById(
			// 	'phpRepos'
			// ).innerHTML = `PHP: ${phpCount.toString()}`;
			break;
		case 'C++':
			langImg = CPlusPlus;
			// cPlusPlusCount++;
			// document.getElementById(
			// 	'cPlusPlusRepos'
			// ).innerHTML = `C++: ${cPlusPlusCount.toString()}`;
			break;
		case 'CSS':
			langImg = Css;
			// cssCount++;
			// document.getElementById(
			// 	'cssRepos'
			// ).innerHTML = `CSS: ${cssCount.toString()}`;
			break;
		case 'C#':
			langImg = CSharp;
			// cSharpCount++;
			// document.getElementById(
			// 	'cSharpRepos'
			// ).innerHTML = `C#: ${cSharpCount.toString()}`;
			break;
		case 'Go':
			langImg = Go;
			// goCount++;
			// document.getElementById(
			// 	'goRepos'
			// ).innerHTML = `Go: ${goCount.toString()}`;
			break;
		case 'C':
			langImg = C;
		// 	cCount++;
		// 	document.getElementById('cRepos').innerHTML = `C: ${cCount.toString()}`;
		// 	break;
		// case 'Objective-C':
		// 	cCount++;
			break;
		case 'Objective-C++':
			langImg = CPlusPlus;
			// cPlusPlusCount++;
			break;
		case 'HTML':
			langImg = Html;
			// otherCount++;
			break;
		case 'Swift':
			langImg = Swift;
			// otherCount++;
			break;
		case 'TypeScript':
			langImg = TypeScript;
			// otherCount++;
			break;
		case 'Jupyter Notebook':
			langImg = Jupyter;
			// otherCount++;
			break;
		case 'Haskell':
			langImg = Haskell;
			// otherCount++;
			break;
		case 'OCaml':
			langImg = OCaml;
			// otherCount++;
			break;
		case 'Scala':
			langImg = Scala;
			// otherCount++;
			break;
		case 'Shell':
			langImg = Shell;
			// otherCount++;
			break;
		case 'Hack':
			langImg = Hack;
			// otherCount++;
			break;
		case 'Perl':
			langImg = Perl;
			// otherCount++;
			break;
		case 'Cuda':
			langImg = Cuda;
			// otherCount++;
			break;
		case 'Processing':
			langImg = Processing;
			// otherCount++;
			break;
		case 'D':
			langImg = D;
			// otherCount++;
			break;
		case 'Lua':
			langImg = Lua;
			// otherCount++;
			break;
		case 'Matlab':
			langImg = Matlab;
			// otherCount++;
			break;
		default:
			langImg = Github;
			// otherCount++;
			// document.getElementById(
			// 	'otherRepos'
			// ).innerHTML = `Other: ${otherCount.toString()}`;
			break;
	}
	return langImg;
}