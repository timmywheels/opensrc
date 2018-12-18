const passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(new GitHubStrategy({
		clientID: GITHUB_CLIENT_ID,
		clientSecret: GITHUB_CLIENT_SECRET,
		callbackURL: "http://127.0.0.1:3000/auth/github/callback"
	},
	function(accessToken, refreshToken, profile, cb) {
		User.findOrCreate({ githubId: profile.id }, function (err, user) {
			return cb(err, user);
		});
	}
));