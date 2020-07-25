const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of exercise"
      },
      name: {
          type: String,
          trim: true,
          required: "Enter a name of the exercise"
      },
      duration: {
          type: Number,
          required: "Enter the duration of the exercise"
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ]
},
{
toJSON: {
    virtuals: true
}
});

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
