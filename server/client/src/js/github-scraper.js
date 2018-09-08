// const request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const axios = require('axios');

axios.get('https://github.com/trending/javascript?since=daily').then(
	res => {
		if (res.status === 200) {
			const html = res.data;
			const dom = new JSDOM(html);

			let data = [];
			let obj = {};

			let repoTitle = dom.window.document.querySelectorAll('.repo-list h3');
			let repoTitleArr = Array.from(repoTitle);

			let repoDesc = dom.window.document.querySelectorAll('.repo-list .py-1 p');
			let repoDescArr = Array.from(repoDesc);

			let repoStarCount = dom.window.document.querySelectorAll(
				'.repo-list .float-sm-right'
			);
			let repoStarCountArr = Array.from(repoStarCount);

			for (let i = 0; i < repoTitleArr.length; i++) {
				obj.repoName = repoTitleArr[i].textContent.trim();
				obj.repoDesc = repoDescArr[i].textContent.trim();
				obj.starCount = repoStarCountArr[i].textContent.trim();
				data.push(obj);
				obj = {};
			}

			for (let i in data) {
				console.log(data[i]);
			}
		}
	},
	err => console.log(err)
);

//
// let repoDesc = document.querySelectorAll('.repo-list .py-1 p');
// let repoDescArr = Array.from(repoDesc);
//
// let repoStarCount = document.querySelectorAll('.repo-list .float-sm-right');
// let repoStarCountArr = Array.from(repoStarCount);
//
// // var repoLang = document.querySelectorAll('.repo-list span[itemprop="programmingLanguage"]');
// // var repoLangArr = Array.from(repoLang);
//
// let data = []; // Store objs
//
// let obj = {}; // Store repo data
//
// for (let i = 0; i < repoTitleArr.length; i++) {
// 	obj.repoName = repoTitleArr[i].innerText;
// 	obj.repoDesc = repoDescArr[i].innerText;
// 	obj.starCount = repoStarCountArr[i].innerText;
// 	data.push(obj);
// 	obj = {};
// }

// console.log(data);
