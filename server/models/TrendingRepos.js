const mongoose = require('mongoose');
const { Schema } = mongoose;

const trendingRepoSchema = new Schema({
	repoName: String,
	repoDesc: String,
	repoRank: Number,
	starCount: String,
	date: Date
});

// module.exports = trendingRepoSchema;
mongoose.model('trendingRepo', trendingRepoSchema);
