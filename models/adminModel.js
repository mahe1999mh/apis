const mongoose = require('mongoose');

const formchatSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String, 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const FormchatSchema = mongoose.model('FormchatSchema', formchatSchema);

module.exports = FormchatSchema;
