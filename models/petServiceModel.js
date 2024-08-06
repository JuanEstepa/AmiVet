const mongoose = require("mongoose");

const { Schema } = mongoose;

const petServiceSchema = new Schema({
  petId: {
    type: Schema.Types.ObjectId,
    ref: "Pet",
    required: true,
  },
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("PetService", petServiceSchema);
