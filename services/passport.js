const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
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
        clientID: keys.github_client_id,
        clientSecret: keys.github_client_secret,
        callbackURL: '/auth/github/callback',
        proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
    console.log('__PROFILE__', profile)
        const existingUser = await User.findOne({ githubId: profile.id });
        if (existingUser) {
            return done(null, existingUser)
        }
        const user = await new User({
            githubId: profile.id,
            username: profile.displayName,
            created: Date.now()
        }).save((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Saving user...');
                done(null, user);
            }
        });
    }
));