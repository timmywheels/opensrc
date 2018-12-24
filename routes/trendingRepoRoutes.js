const mongoose = require('mongoose');

const TrendingRepos = mongoose.model('trendingRepo');

module.exports = app => {
	app.get('/api/trending', async (req, res) => {
		const trending = await TrendingRepos.find()
			.limit(24)
			.sort({date: 'desc'});
		res.send(trending);
	});
};
