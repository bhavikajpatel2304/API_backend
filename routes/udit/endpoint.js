const express = require("express");
const Response = require("../../global/response");
const Code = require("../../global/code");
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post("/register-admin",

    [
        body("email").isEmail().withMessage("Email format is incorrect"),
        body("password").isLength({min:8, max:20}).withMessage("Password should be 8 to 20 characters long"),
        body("name").notEmpty().withMessage("Parameter `name` missing.")
    ],

    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return Response.error(
                res,
                Code.BAD_REQUEST,
                errors.array().map((error) => ({
                    field: error.param,
                    errorMessage: error.msg,
                }))
            );
        }

        const response = controller.registerAdmin();
    }
);

module.exports = router;