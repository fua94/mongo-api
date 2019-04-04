const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
}).post('/tasks', async (req, res) => {
    console.log(req.body);
    const task = new Task(req.body);

    await task.save();
    res.json({status: 'received!'});
});

router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({
        _id: id
    }).then(
        result => {
            res.status(201).json({status: 'deleted!'});
        }
    ).catch(
        error => {
            res.status(412).json({msg: error.message});
        }
    );


});

module.exports = router;
