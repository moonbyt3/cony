const express = require('express');
const mongoose = require('mongoose');

const posts = require('./api/posts');
const profile = require('./api/profile');
const users = require('./api/users');

const app = express();

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