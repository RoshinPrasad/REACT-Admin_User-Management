const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);

function connect() {
  mongoose.connect(process.env.URL);
  mongoose.connection.once('open', () => {
    console.log('Connection established successfully');
  });
}

module.exports = {
  connect
};
