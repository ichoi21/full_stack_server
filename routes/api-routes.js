const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/test", (req, res) => {
  res.json({ mes: "API YO" });
});

router.get("/api/test2", (req, res) => {
  res.json({ mes: "API YO YO" });
});

module.exports = router;
