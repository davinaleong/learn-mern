const express = require("express")
// const Workout = require("../models/workout-model")
const { index, create, show } = require("../controllers/workout-controller")

const router = express.Router()

// GET all workouts
router.get("/", index)

// POST a new workout
router.post("/", create)

// GET a single workout via ID
router.get("/:id", show)

// PATCH a single workout via ID
router.patch("/:id", (req, res) => {
  res.json({ message: "PATCH a single workout via ID." })
})

// DELETE a single workout via ID
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a single workout via ID." })
})

module.exports = router
