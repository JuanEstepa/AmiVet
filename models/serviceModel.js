const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
