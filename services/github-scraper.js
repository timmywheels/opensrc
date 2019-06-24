// const sys = require("node/util");
const mongoose = require('mongoose');
const jsdom = require('jsdom');
const htmlparser = require("htmlparser");
const { JSDOM } = jsdom;
const axios = require('axios');
const keys = require('../config/keys');
require('../models/TrendingRepos');


let data = [];
let repoDailyRank = 0;

const handler = new htmlparser.DefaultHandler(function (error, dom) {

	if (error) {
		console.log("Error:", error);
	} else {
		// console.log("parsing data...");
		// let totalStarsTodayNode = dom[0].children[7].children[9].children[2].raw.trim();
		repoDailyRank++;
		let repoName;
		let repoNameNode;
		try {
			repoNameNode = dom[0].children[3].children[1].attribs.href.slice(1, this.length);
		} catch (e) {
			repoNameNode = null;
		}
		repoName = repoNameNode;
		// console.log("REPO NAME:", repoName);

		let repoUrl = `https://github.com/${repoName.replace(/\s/g, "")}`;
		// console.log("REPO URL:", repoUrl);

		let repoDescriptionNode;
		let repoDescription;
		try{
			repoDescriptionNode = dom[0].children[5].children[0].raw.trim();

		} catch (e) {
			repoDescriptionNode = null;
		}
		repoDescription = repoDescriptionNode;
		// console.log("REPO DESCRIPTION:", repoDescription);

		let repoProgrammingLanguageNode;
		let repoProgrammingLanguage;
		try {
			repoProgrammingLanguageNode = dom[0].children[7].children[1].children[3].children[0].data;
		} catch (e) {
			repoProgrammingLanguageNode = null;
		}
		repoProgrammingLanguage = repoProgrammingLanguageNode;
		// console.log("PROGRAMMING LANGUAGE:", repoProgrammingLanguage);

		let repoTotalStarsNode;
		let repoTotalStars;
		try {
			repoTotalStarsNode = dom[0].children[7].children[3].children[2].data.trim();
		} catch (e) {
			repoTotalStarsNode = null
		}
		repoTotalStars = repoTotalStarsNode;
		// console.log("TOTAL STARS:", repoTotalStars);

		let date = new Date().toLocaleString();
		// console.log("DATE:", date);

		const trendingRepo = new TrendingRepo({
			repoName,
			repoDescription,
			repoProgrammingLanguage,
			repoUrl,
			repoDailyRank,
			repoTotalStars,
			date
		});
		trendingRepo.save();

		let obj = {
			repoName,
			repoDescription,
			repoProgrammingLanguage,
			repoUrl,
			repoDailyRank,
			repoTotalStars,
			date
		};

		data.push(obj);
		console.log(obj);

		obj = {};
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

			let trendingRepos = dom.window.document.querySelectorAll("article");
			let trendingReposArr = Array.from(trendingRepos);

			trendingReposArr.map((trendingRepo, index) => {
				parser.parseComplete(trendingRepo.outerHTML);
			});
		}
	},
	err => console.log(err)
);