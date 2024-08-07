const express = require("express")
const Workout = require("../models/workout-model")

const router = express.Router()

// GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "GET all workouts." })
})

// GET a single workout via ID
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single workout via ID." })
})

// POST a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body

  try {
    const workout = await Workout.create({ title, reps, load })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
  res.json({ message: "POST a new workout." })
})

// Update a single workout via ID
router.patch("/:id", (req, res) => {
  res.json({ message: "PATCH a single workout via ID." })
})

// Destroy a single workout via ID
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a single workout via ID." })
})

module.exports = router
