const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const celebSchema = new Schema (
    {
        name: String,
        occupation: 
        {
            type: String,
            enum: [ 'Actor', 'Singer', 'Comedian', 'Unknown']
        },
        catchPhrase: String
    });

module.exports = model('Celebrity', celebSchema);