import express from "express";

// Create router
const router = express.Router();

/**
 * @desc    Login/Landing page
 * @route   GET /
 */
router.get("/", (request, response) => {
  response.send("Login");
});

/**
 * @desc    Dashboard page
 * @route   GET /dashboard
 */
router.get("/dashboard", (request, response) => {
  response.send("Dashboard");
});

export { router };
