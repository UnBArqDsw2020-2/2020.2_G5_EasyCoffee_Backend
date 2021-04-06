const { verifySignUp } = require("../middlewares");
const authController = require("../controllers/auth.controller");
const express = require("express");

const routes = express.Router();

routes.post(
    "/api/auth/signup",
    [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
    ],
    authController.signup

);

routes.post("/api/auth/signin", authController.signin);

/*module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        authController.signup

    );

    app.post("/api/auth/signin", authController.signin);

};*/

module.exports = routes;