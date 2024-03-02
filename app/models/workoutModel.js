const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
  reps: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
});

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sets: [setSchema]
});

const workoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  exercises: [exerciseSchema]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
