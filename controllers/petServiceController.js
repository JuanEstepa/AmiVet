const PetService = require("../models/petServiceModel");

module.exports = {
  getPetService: async (req, res) => {
    try {
      const result = await PetService.find({});
      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  getPetServiceByPet: async (req, res) => {
    const { id } = req.params;

    try {
      const result = await PetService.find({ petId: id });
      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  createPetService: async (req, res) => {
    try {
      const newPetService = new PetService(req.body);
      await newPetService.save();
      return res.status(201).json({ data: newPetService });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  updatePetService: async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const result = await PetService.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (result) {
        return res.status(200).json({ data: result });
      } else {
        return res.status(404).json({ msg: "PetService not found" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  deletePetService: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await PetService.findByIdAndDelete(id);

      if (result) {
        return res.status(200).json({ msg: "PetService deleted successfully" });
      } else {
        return res.status(404).json({ msg: "PetService not found" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
