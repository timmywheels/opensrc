const passport = require('passport');


module.exports = app => {

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/auth/github',
        passport.authenticate('github', {
            scope: ['user', 'repo']
        })
    )

    app.get('/auth/github/callback',
            passport.authenticate("github"), (req, res) => {
            res.redirect('/dashboard');
    });

    app.get('/auth/logout', (req, res) => {
        // res.setHeader("Content-Type", "text/html")
        req.logout();
        res.redirect('/');
    });
};