const passport = require('passport');

module.exports = app => {
    app.get('/auth/github',
        passport.authenticate('github', {
            scope: ['repo', 'user']
        }));

    app.get('/auth/github/callback',
        passport.authenticate('github'),
        (req, res, next) => {
            const code = req.query.code;
            console.log("__CODE__:", code);
            res.redirect('/dashboard');
            next();
        });

    app.get('/auth/logout', (req, res, next) => {
        console.log("__REQ__:", req);
        req.session = null;
        // req.user = null;
        // req.headers.cookie = null;
        res.redirect('/');
        next();

    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};