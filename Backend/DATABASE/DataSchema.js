const mongoose = require('./Dataconnet');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  }
});

const BookModel = mongoose.model('Book', bookSchema);
module.exports = BookModel;
