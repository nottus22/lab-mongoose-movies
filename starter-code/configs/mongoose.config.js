const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((error) => {
    console.error('Error connecting to mongo', error);
  });