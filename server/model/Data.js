const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
  regnum: {
    type: Number,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  }
  
});

const Data = mongoose.model("Data",DataSchema)
module.exports = Data