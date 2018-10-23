const mongoose = require('mongoose');
const keys = require("../../../server/config/keys");
require('../../models/TrendingRepos');

const TrendingRepo = mongoose.model('trendingRepo');

mongoose.Promise = global.Promise;

mongoose.connect(
	keys.mongo,
	{ useNewUrlParser: true },
	(err, db) => {
		if (err) {
			console.log(err);
		} else {
			console.log(`Connected to ${db.db.databaseName}`);
		}
	}
);

// const arr = [];

TrendingRepo.find((err, trendingRepos) => {
	if (err) return handleError(err);
	// arr.push(trendingRepos)
	console.log(trendingRepos);
}).limit(25).sort({repoRank: 'asc'});

