const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const keys = require('./config/keys');
const passport = require('passport')

const db = keys.mongoURI;

mongoose
    .connect(db, {})
    .then(()=> console.log("DB Connected"))
    .catch(err=> console.log(err));

const app = express();

//init passport
app.use(passport.initialize());

require('./config/passport')(passport);

// Configure body parser

app.use(bodyParser.urlencoded({extended: false}));

//User routes

const userRoutes = require('./routes/User');
app.use('/users', userRoutes);

const postRoutes = require('./routes/Post');
app.use('/posts', passport.authenticate('jwt', {session: false}), postRoutes);

//Homepage

app.get('/', (req, res) => res.json(
    {
        msg: '\n Hello World!!'
    }
));


const port = process.env.PORT || 5000;

app.get('/about', function (req, res) {
    res.send('Hello World!')
  })
  


app.listen(port, () => console.log(`Your application is running @ http://localhost:${port}`));