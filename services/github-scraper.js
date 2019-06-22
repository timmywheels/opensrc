// const sys = require("node/util");
const mongoose = require('mongoose');
const jsdom = require('jsdom');
const htmlparser = require("htmlparser");
const { JSDOM } = jsdom;
const axios = require('axios');
const keys = require('../config/keys');
require('../models/TrendingRepos');

const handler = new htmlparser.DefaultHandler(function (error, dom) {
	if (error) {
		console.log("Error:", error);
	} else {
		// console.log("parsing done...");
		// console.log(dom[0].children[7].children[1].children[3].children[0].data);

		let repoTitle = dom[0].children[3].children[1].attribs.href.slice(1, this.length);
		console.log("REPO TITLE:", repoTitle);

		let repoDescriptionNode = dom[0].children[5].children[0].raw;
		let repoDescription = repoDescriptionNode === null ? "no description" : repoDescriptionNode.trim();
		console.log("REPO DESCRIPTION:", repoDescription);

		// let programmingLanguageNode = dom[0].children[7].children[1];
		// // let programmingLanguage = programmingLanguageNode === 'undefined' ? "language not specified" : programmingLanguageNode;
		// console.log("PROGRAMMING LANGUAGE:", programmingLanguageNode);

		if (dom[0].children[7].children[1].children[3]) {
			let programmingLanguageNode = dom[0].children[7].children[1].children[3].children[0].data;
			let programmingLanguage = programmingLanguageNode === 'undefined' ? "language not specified" : programmingLanguageNode;
			console.log("PROGRAMMING LANGUAGE:", programmingLanguage);
		} else {
			console.log("nope")
		}








		return dom;
	}

});

const parser = new htmlparser.Parser(handler);



const TrendingRepo = mongoose.model('trendingRepo');
mongoose.Promise = global.Promise;

mongoose.connect(
	keys.mongo,
	{useNewUrlParser: true},
	(err, db) => {
		if (err) {
			console.log(err);
		} else {
			console.log(`Connected to ${db.db.databaseName}`);
		}
	}
);



axios.get('https://github.com/trending').then(
	res => {
		if (res.status === 200) {
			console.log("Collecting trending repository data...");
			const html = res.data;
			const dom = new JSDOM(html);

			let data = [];
			let obj = {};

			let trendingRepos = dom.window.document.querySelectorAll("article");
			let trendingReposArr = Array.from(trendingRepos);



			trendingReposArr.map((trendingRepo, index) => {

				// console.log("trendingRepos", trendingRepo.outerHTML);

				let htmlData = parser.parseComplete(trendingRepo.outerHTML);
				// sys.puts(sys.inspect(handler.dom, false, null));

				// console.log(htmlData);

				// sys.puts(sys.inspect(handler.dom, false, null));

			});




			// // let repoTitles = dom.window.document.querySelectorAll('.repo-list h3');
			// let repoTitles = dom.window.document.querySelectorAll("h1.h3.lh-condensed > a");
			// let repoTitleArr = Array.from(repoTitles);
			// console.log("repoTitleArr", repoTitleArr);
			//
			// // let repoDesc = dom.window.document.querySelectorAll('.repo-list .py-1 p');
			// let repoDesc = dom.window.document.querySelectorAll("p.col-9.text-gray.my-1.pr-4");
			// console.log("__REPO DESC__", repoDesc.textContent);
			// if (repoDesc === undefined) {
			// 	repoDesc = ""
			// }
			// let repoDescArr = Array.from(repoDesc);
			// console.log("repoDescArr", repoDescArr);
			//
			// // let repoStarCount = dom.window.document.querySelectorAll(
			// // 	'.repo-list .float-sm-right'
			// // );
			// let repoStarCount = dom.window.document.querySelectorAll("span.d-inline-block.float-sm-right");
			// let repoStarCountArr = Array.from(repoStarCount);
			// console.log("repoStarCountArr", repoStarCountArr);


			// repoTitleArr.map((repo, i) => {
			//
			// 	console.log("__REPO__", repo);
			//
			// 	let rank = i;
			// 	let repoName = repoTitleArr[i].textContent.trim();
			//
			// 	let repoUrl = `https://github.com/${repoName.replace(/\s/g, "")}`;
			// 	let repoDesc = repoDescArr[i] === undefined ? "no description" : repoDescArr[i].textContent.trim();
			// 	let repoStarCount = repoStarCountArr[i].textContent.trim();
			// 	let date = new Date().toLocaleString();
			//
			// 	obj.repoName = repoName;
			// 	obj.repoDesc = repoDesc;
			// 	obj.repoUrl = repoUrl;
			// 	obj.repoRank = rank++;
			// 	obj.repoStarCount = repoStarCount;
			// 	obj.date = date;
			//
			// 	data.push(obj);
			// 	console.log(obj);
			//
			// 	const trendingRepo = new TrendingRepo({
			// 		repoName,
			// 		repoDesc,
			// 		repoRank: rank++,
			// 		repoStarCount,
			// 		date
			// 	});
			// 	trendingRepo.save();
			// 	obj = {};
			//
			// });

			// for (let i = 0; i < repoTitleArr.length; i++) {
			// 	let rank = i;
			// 	let repoName = repoTitleArr[i].textContent.trim();
			//
			// 	let repoUrl = `https://github.com/${repoName.replace(/\s/g, "")}`;
			// 	let repoDesc = repoDescArr[i].textContent.trim();
			// 	let repoStarCount = repoStarCountArr[i].textContent.trim();
			// 	let date = new Date().toLocaleString();
			//
			// 	obj.repoName = repoName;
			// 	obj.repoDesc = repoDesc;
			// 	obj.repoUrl = repoUrl;
			// 	obj.repoRank = rank++;
			// 	obj.repoStarCount = repoStarCount;
			// 	obj.date = date;
			//
			// 	data.push(obj);
			// 	console.log(obj);
			//
			// 	const trendingRepo = new TrendingRepo({
			// 		repoName,
			// 		repoDesc,
			// 		repoRank: rank++,
			// 		repoStarCount,
			// 		date
			// 	});
			// 	trendingRepo.save();
			// 	obj = {};
			// }

			// for (let i in data) {
			// 	console.log(data[i]);
			// }
		}
	},
	err => console.log(err)
);