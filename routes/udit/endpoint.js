const express = require("express");
const router = express.Router();

router.get("/welcome", (req, res) => {
    res.send("Working");
})

module.exports = router;