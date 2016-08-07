const { Schema } = require('mongoose');
const connection = require('./connection');

const HitokotoSchema = new Schema({
  date: { type: Date, default: Date.now },
  hitokoto: { type: String },
  author: { type: String, default: null },
  source: { type: String, default: null }
});

const Hitokoto = connection.model('Hitokoto', HitokotoSchema);
module.exports = Hitokoto;
