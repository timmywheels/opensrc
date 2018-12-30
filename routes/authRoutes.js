const passport = require('passport');

module.exports = app => {
    app.get('/auth/github',
        passport.authenticate('github', {
            scope: ['repo', 'user']
        }));

    app.get('/auth/github/callback',
        passport.authenticate('github'),
        (req, res) => {
            res.redirect('/account');
        });

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};