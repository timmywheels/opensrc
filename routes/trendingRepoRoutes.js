const mongoose = require('mongoose');

const TrendingRepos = mongoose.model('trendingRepo');

module.exports = app => {
	app.get('/api/trending', async (req, res) => {
		const trending = await TrendingRepos.find()
			.limit(25)
			.sort('asc');
		res.send(trending);
	});
};
