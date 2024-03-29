const express = require("express");
const UserController = require("../controllers/users.controller");
const AuthController = require("../controllers/auth.controller");
const route = require('../shared/middlewares/route.middleware')
const auth = require('../shared/middlewares/auth.middleware')
const permission = require('../shared/middlewares/permission.middleware')

const router = express.Router();


router.get("/", route({ routeName: 'auth:users-list' }), UserController.getUsers);
router.post("/selectedUsers", route({ routeName: 'auth:users-list' }), UserController.getSelectedUsers);
router.get("/loggedInUser", auth(), UserController.getUserByIdAfterLogin);
router.get("/:id", auth(), UserController.getUserById);

// router.put("/:id", auth(), UserController.updateUser);

module.exports = router;
