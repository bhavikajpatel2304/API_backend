const { query, Router } = require("express");
const express = require("express");
const Admin = require("../../model/Admin");
const bodyParser = require("body-parser"); // pull information from HTML POST (express4)
const Controller = require("./controller");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: "true" })); // parse application/x-www-form-urlencoded

// GET
router.get("/admin/:id?", async (req, res) => {
	const id = req.params.id;
	if (id) {
		const resp = await Controller.getAdminById(id);
		return res.send(resp);
	} else {
		const resp = await Controller.getAllAdmins();
		return res.send(resp);
	}
});

//PUT
router.put("/admin/:id", async (req, res) => {
	// create mongose method to update an existing record into collection
	let id = req.params.id;
	var data = {
		admin_id: req.body.admin_id,
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};
	const resp = await Controller.updateAdminById(data, id);
	console.log(resp);
	res.send(resp);
});

router.delete("/admin/:id", async (req, res) => {
	let id = req.params.id;
	const resp = await Controller.deleteAdminById(id);
	res.send(resp);
});

module.exports = router;
