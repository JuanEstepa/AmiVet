const mongoose = require("mongoose");

const { Schema } = mongoose;

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Date,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Owner",
    required: true,
  },
});

module.exports = mongoose.model("Pet", petSchema);
