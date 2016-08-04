const { Schema } = require('mongoose');
const connection = require('./connection');

const HitokotoSchema = new Schema({
  date: { type: Date, default: Date.now },
  hitokoto: { type: String },
});

const Hitokoto = connection.model('Hitokoto', HitokotoSchema);
module.exports = Hitokoto;
