const Owner = require("../models/ownerModel");

module.exports = {
  getOwner: async (req, res) => {
    try {
      const result = await Owner.find({});
      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  getOwnerById: async (req, res) => {
    const { id } = req.params;

    try {
      const result = await Owner.findById(id);
      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  createOwner: async (req, res) => {
    try {
      const newOwner = new Owner(req.body);
      await newOwner.save();
      return res.status(201).json({ data: newOwner });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  updateOwner: async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const result = await Owner.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (result) {
        return res.status(200).json({ data: result });
      } else {
        return res.status(404).json({ msg: "Owner not found" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  deleteOwner: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Owner.findByIdAndDelete(id);

      if (result) {
        return res.status(200).json({ msg: "Owner deleted successfully" });
      } else {
        return res.status(404).json({ msg: "Owner not found" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
