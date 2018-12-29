const passport = require('passport');

module.exports = app => {
	app.get('/auth/github',
		passport.authenticate('github', {
			scope: ["profile", "email"]
		}));

	app.get('/auth/github/callback',
		passport.authenticate('github', {failureRedirect: '/login'}),
		(req, res) => {
			// Successful authentication, redirect home.
			res.redirect('/profile');
		});

	app.get('/auth/logout', (req,  res) => {
		req.logout();
		res.redirect('/');
	});

};