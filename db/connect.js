const mongodb = require('mongodb');
const mongoose = require('mongoose');
const mongoConnection = mongoose.connect('mongodb://127.0.0.1/search_db',{useNewUrlParser: true, useUnifiedTopology : true})
    .then(() => console.log('connected'))
    .catch((err)=> console.log(err));
module.exports = mongoConnection;
