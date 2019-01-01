const passport = require('passport');

module.exports = app => {
    app.get('/auth/github',
        passport.authenticate('github', {
            scope: ['repo', 'user']
        }));

    app.get('/auth/github/callback',
        passport.authenticate('github'),
        (req, res) => {
            res.redirect('/dashboard');
        });

    app.get('/auth/logout', (req, res) => {
        // console.log(">>>>>>>>>req:", req)
        req.logout();
        res.setHeader("Content-Type", "text/html")
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};