const mongoose = require('mongoose')
const movie_Schema = mongoose.Schema({
    movie_name:{
        type: String,
        require: true,
        unique: true
    },
    season:{
        type: Number,
        require: true
    },
    autors:{
        type: Array
    }
})

module.exports = mongoose.model('MovieCollection', movie_Schema)