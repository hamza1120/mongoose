const express = require("express");
const Contact = require("../models/contactSchema");

const router = express.Router();

//@Description:Post Méthode
router.post("/users", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ msg: "succes", newContact });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
