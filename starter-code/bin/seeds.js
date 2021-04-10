require('dotenv').config();
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')

const celebrities = [ 
    {
        name: 'Brad Pitt',
        occupation: 'Actor',
        catchPhrase: 'I am one of those people you hate because of genetics.'
    },
    {
        name: 'Meryl Streep',
        occupation: 'Actor',
        catchPhrase: 'Integrate what you believe in every single area of your life.'
    },
    {
        name: 'Julia Roberts',
        occupation: 'Actor',
        catchPhrase: 'Catchphrase'
    }
];

const movies = [
    {
      title: "Titanic",
      genre: "action",
    },
    {
      title: "Inception",
      genre: "action",
    },
    {
      title: "Terminator",
      genre: "action",
    },
  ];
  
  async function seedTheDB() {
    await require('../configs/mongoose.config');
    Movie.create(movies)
      .then((responseFromDB) => {
        console.log(`${responseFromDB.length} entries have been added`);
        mongoose.connection.close();
      })
      .catch((error) => console.log('error', error));
  }
  seedTheDb();

// Celebrity.create(celebrities)
//     .then(() => {
//         console.log('It worked!');
//     })
//     .catch((error) => {
//         console.log('Did not work', error);
//     })