const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');

const db = "mongodb+srv://odescuns:olivier@cluster0-jzmpl.mongodb.net/test?retryWrites=true&w=majority"

mongoose
    .connect(db, {})
    .then(()=> console.log("DB Connected"))
    .catch(err=> console.log(err));

const app = express();

// Configure body parser

app.use(bodyParser.urlencoded({extended: false}));

//User routes

const userRoutes = require('./routes/User');
app.use('/users', userRoutes);

const postRoutes = require('./routes/Post');
app.use('/posts', postRoutes);

//Homepage

app.get('/', (req, res) => res.json(
    {
        msg: 'Hello World!!'
    }
));


const port = process.env.PORT || 5000;

app.get('/about', function (req, res) {
    res.send('Hello World!')
  })
  


app.listen(port, () => console.log(`Your application is running @ http://localhost:${port}`));