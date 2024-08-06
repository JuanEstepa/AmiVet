const mongoose = require("mongoose");

const { Schema } = mongoose;

const ownerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    max: 9999999999,
  },
});

module.exports = mongoose.model("Owner", ownerSchema);
