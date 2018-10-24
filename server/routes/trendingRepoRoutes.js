const mongoose = require('mongoose');

const TrendingRepos = mongoose.model('trendingRepo');
const trendingRepoArr = [];

module.exports = app => {
	app.get('/api/trending', async (req, res) => {
		// console.log('hello')
		const trending = await TrendingRepos.find()
			.limit(25)
			.sort('desc');
		res.send(trending);
	});
};
