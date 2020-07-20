const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Date.now(),
  exercises: [

  ]
});

const Workout = mongoose.model("User", WorkoutSchema);

module.exports = Workout;
