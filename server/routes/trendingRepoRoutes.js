const mongoose = require('mongoose');

const TrendingRepos = mongoose.model('trendingRepo', 'trendingRepoSchema');
const trendingRepoArr = [];

module.exports = app => {
	app.get('/api/trending', async (req, res) => {
		const trending = await TrendingRepos.find().limit(25).sort('desc')
		res.send(trending);
	})
}