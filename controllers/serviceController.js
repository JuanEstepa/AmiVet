const Service = require("../models/ServiceModel");

module.exports = {
  getService: async (req, res) => {
    try {
      const result = await Service.find({});
      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  getServiceById: async (req, res) => {
    const { id } = req.params;

    try {
      const result = await Service.findById(id);
      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  createService: async (req, res) => {
    try {
      const newService = new Service(req.body);
      await newService.save();
      return res.status(201).json({ data: newService });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  updateService: async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const result = await Service.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (result) {
        return res.status(200).json({ data: result });
      } else {
        return res.status(404).json({ msg: "Service not found" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  deleteService: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Service.findByIdAndDelete(id);

      if (result) {
        return res.status(200).json({ msg: "Service deleted successfully" });
      } else {
        return res.status(404).json({ msg: "Service not found" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
