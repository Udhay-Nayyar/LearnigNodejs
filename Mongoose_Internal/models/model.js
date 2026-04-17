const mongoose = require("mongoose")
const { Schema } = mongoose;

const schema = new Schema({
  Name : String,
  age : Number,
  city : String,
  gender : String
});


const User = mongoose.model('User', schema);
module.exports = User;