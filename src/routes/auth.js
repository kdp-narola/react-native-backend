const express = require("express")
const router = express.Router();

const authController = require("../controllers/auth");
const protectedRoute = require("../middleware/authMiddleware");

router.post("/register", authController.register)
router.post("/login", authController.login)

router.get("/me", protectedRoute, authController.getProfile)

module.exports = router