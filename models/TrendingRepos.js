const mongoose = require('mongoose');
const { Schema } = mongoose;

const trendingRepoSchema = new Schema({
	repoName: String,
	repoDescription: String,
	repoProgrammingLanguage: String,
	repoUrl: String,
	repoDailyRank: Number,
	repoTotalStars: String,
	date: Date
});

// module.exports = trendingRepoSchema;
mongoose.model('trendingRepo', trendingRepoSchema);
