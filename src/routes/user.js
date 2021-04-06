const { authJwt } = require("../middlewares");
const UserController = require("../controllers/UserController");
const express = require("express");

const routes = express.Router();

routes.get("/api/test/all", UserController.allAccess);

routes.get("/api/test/user", authJwt.verifyToken, UserController.userBoard);

routes.get("/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    UserController.adminBoard
);

/*module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", UserController.allAccess);

    app.get("/api/test/user", authJwt.verifyToken, UserController.userBoard);

    app.get("/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        UserController.adminBoard
    );
}*/

module.exports = routes;