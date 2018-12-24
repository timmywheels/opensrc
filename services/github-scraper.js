// const request = require('request');
const mongoose = require('mongoose');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const axios = require('axios');
const keys = require('../config/keys');
require('../models/TrendingRepos');
const schedule = require("node-schedule");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

schedule.scheduleJob('0 0 * * *', () => {
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
					let rank = i;
					obj.repoName = repoTitleArr[i].textContent.trim();
					obj.repoDesc = repoDescArr[i].textContent.trim();
					obj.repoRank = rank++;
					obj.starCount = repoStarCountArr[i].textContent.trim();
					obj.date = new Date().toLocaleString();
					data.push(obj);
					console.log(obj);

					const trendingRepo = new TrendingRepo({
						repoName: repoTitleArr[i].textContent.trim(),
						repoDesc: repoDescArr[i].textContent.trim(),
						repoRank: rank++,
						starCount: repoStarCountArr[i].textContent.trim(),
						date: new Date().toLocaleString()
					});
					trendingRepo.save();
					obj = {};
				}

				for (let i in data) {
					console.log(data[i]);
				}
			}
		},
		err => console.log(err)
	);
}

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
