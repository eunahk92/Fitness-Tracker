const router = require('express').Router();
const Workout = require('../models/Workout');

router.get('/api/workouts', (req, res) => {
	Workout.find({})
		.then(dbWorkout => res.json(dbWorkout))
		.catch(err => res.json(err));
});

router.get('/api/workouts/range', (req, res) => {
	Workout.find({})
		.then(dbWorkout => res.json(dbWorkout))
		.catch(err => res.json(err));
});

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
		.then(dbWorkout => res.json(dbWorkout))
		.catch(err => res.json(err));
});

router.put('/api/workouts/:id', (req, res) => {
    const { id } = req.params;
    const { body } = req;
	Workout.updateOne(
		{ _id: id },
		{ $push: { exercises: body } }
	).then(dbWorkout => res.json(dbWorkout))
	.catch(err => res.json(err));
});

module.exports = router;
