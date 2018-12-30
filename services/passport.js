const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(obj => {
		done(null, obj);
	});
});

passport.use(new GitHubStrategy({
		clientID: keys.github_client_id,
		clientSecret: keys.github_client_secret,
		callbackURL: "/auth/github/callback"
	},
	async (accessToken, refreshToken, profile, done) => {
		const existingUser = await User.findOne({ githubId: profile.id });
		if (existingUser) {
			return done(null, existingUser)
		}
		const user = await new User({ githubId: profile.id}).save();
		done(null, user);
	}
));