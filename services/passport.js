const passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
const mongoose = require('mongoose');
import * as keys from '../config/keys';

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
		clientID: keys.github_client_id,
		clientSecret: keys.github_client_secret,
		callbackURL: "http://localhost:3000/auth/github/callback"
	},
	async (accessToken, refreshToken, profile, done) => {
		const existingUser = await User.findOne({ githubId: profile.id });
		if (existingUser) {
			return done(null, existingUser)
		}
		const user = await new User({ githubId: profile.id}).save();
		done(null,  user);
	}
));