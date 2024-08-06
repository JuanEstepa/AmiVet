const Pet = require("../models/petModel");

module.exports = {
  start: async (req, res) => {
    try {
      return res
        .status(200)
        .send("Conectado correctamente, /docs para ver los endpoints");
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  getPet: async (req, res) => {
    try {
      const result = await Pet.find({});
      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  getPetById: async (req, res) => {
    const { id } = req.params;

    try {
      const result = await Pet.findById(id);
      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  createPet: async (req, res) => {
    try {
      const newPet = new Pet(req.body);
      await newPet.save();
      return res.status(201).json({ data: newPet });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  updatePet: async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const result = await Pet.findByIdAndUpdate(id, updateData, { new: true });

      if (result) {
        return res.status(200).json({ data: result });
      } else {
        return res.status(404).json({ msg: "Pet not found" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  deletePet: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Pet.findByIdAndDelete(id);

      if (result) {
        return res.status(200).json({ msg: "Pet deleted successfully" });
      } else {
        return res.status(404).json({ msg: "Pet not found" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
