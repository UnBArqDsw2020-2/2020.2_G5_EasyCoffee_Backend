const { verifySignUp } = require("../middlewares");
const authController = require("../controllers/auth.controller");
const express = require("express");

const routes = express.Router();

routes.post(
    "/api/auth/signup",
    [
        verifySignUp.checkDuplicateUsernameOrEmail
    ],
    authController.signup

);

routes.post("/api/auth/signin", authController.signin);

module.exports = routes;