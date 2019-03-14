module.exports = {
	mongo: process.env.MONGO_URI,
	url: process.env.ROOT_URL,
	github_client_id: process.env.GITHUB_CLIENT_ID,
	github_client_secret: process.env.GITHUB_CLIENT_SECRET,
	cookie: {
		key: process.env.COOKIE_KEY
	}
};