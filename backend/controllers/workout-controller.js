const Workout = require("../models/workout-model")
const mongoose = require("mongoose")

// Get all workouts
const index = async (req, res) => {
  const workouts = await Workout.find().sort({ createdAt: -1 })

  res.status(200).json(workouts)
}

// Create a new workout
const create = async (req, res) => {
  const { title, reps, load } = req.body

  // Add document to DB
  try {
    const workout = await Workout.create({ title, reps, load })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
  res.json({ message: "POST a new workout." })
}

// Get a single workout
const show = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout." })
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({ error: "No such workout." })
  }

  res.status(200).json(workout)
}

// Edit a workout
const edit = async (req, res) => {
  //
}

// Update a workout
const update = async (req, res) => {
  //
}

// Delete a workout
const destroy = async (req, res) => {
  //
}

module.exports = {
  index,
  show,
  create,
}
