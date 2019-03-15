const mongoose = require('mongoose');

const TrendingRepos = mongoose.model('trendingRepo');

module.exports = app => {
    app.get('/api/user/:username', async (req, res) => {
        const username = await TrendingRepos.find()
            .limit(25)
            .sort('desc');
        res.send(username);
    });
};
