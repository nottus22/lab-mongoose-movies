const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema (
    {
        title: String,
        genre: 
        {
            type: String,
            enum: [ 'action', 'comedy', 'drama', 'horror', 'other']
        },
        plot: String
    });

module.exports = model('Movie', movieSchema);