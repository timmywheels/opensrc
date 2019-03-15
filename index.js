const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/TrendingRepos');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(
    keys.mongo,
    { useNewUrlParser: true },
    (err, db) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Connected to ${ db.db.databaseName }`);
        }
    }
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookie.key],
    }),
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/trendingRepoRoutes')(app);
require('./routes/userRepoRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // Like main.js or main.css
    app.use(express.static('client/build'));

    // const path = require('path').default;
    const path = require('path');
    // Express will serve up index.html
    // If it doesn't recognize route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });


}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening on port ${ PORT }`);
});
