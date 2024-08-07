const express = require("express")
// const Workout = require("../models/workout-model")
const {
  getWorkouts,
  getWorkout,
  createWorkout,
} = require("../controllers/workout-controller")

const router = express.Router()

// GET all workouts
router.get("/", getWorkouts)

// GET a single workout via ID
router.get("/:id", getWorkout)

// POST a new workout
router.post("/", createWorkout)

// Update a single workout via ID
router.patch("/:id", (req, res) => {
  res.json({ message: "PATCH a single workout via ID." })
})

// Destroy a single workout via ID
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a single workout via ID." })
})

module.exports = router
