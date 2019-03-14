const passport = require('passport');


module.exports = app => {
    app.get('/auth/github',
        passport.authenticate('github', {
            scope: ['user', 'repo']
        }));

    app.get('/auth/github/callback',
        passport.authenticate('github', { failureRedirect: '/'}),
        (req, res) => {
            res.redirect('/dashboard');
        });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.setHeader("Content-Type", "text/html")
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};