const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const users = require('./routes/api/users');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURL;

mongoose.connect(db)
    .then(() => {
        console.log('Mongo Connected');
    })
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Hello');
});

// Use routes
app.use('/api/posts', posts);
app.use('/api/profile', profile);
app.use('/api/users', users);

const port = process.env.port || 4200;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});