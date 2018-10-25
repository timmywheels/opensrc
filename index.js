const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/TrendingRepos');

mongoose.Promise = global.Promise;
mongoose.connect(
	keys.mongo,
	{useNewUrlParser: true},
	(err, db) => {
		if (err) {
			console.log(err);
		} else {
			console.log(`Connected to ${db.db.databaseName}`);
		}
	}
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/trendingRepoRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// Like main.js or main.css
	app.use(express.static('client/build'));

	const path = require('path').default;
	// Express will serve up index.html
	// If it doesn't recognize route

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '/client', '/build', 'index.html'));
		// res.sendFile(path.join(__dirname, 'index.html'));
	});

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
