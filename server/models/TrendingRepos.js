const mongoose = require('mongoose');
const { Schema } = mongoose;

const trendingRepoSchema = new Schema({
	repoName: String,
	repoDesc: String,
	repoRank: Number,
	starCount: String,
	date: Date
});

mongoose.model('trendingRepo', trendingRepoSchema);