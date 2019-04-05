const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/taskController');

router.route('/tasks')
    .get(TaskController.index)
    .post(TaskController.create);

router.route('/tasks/:id')
    .put(TaskController.update)
    .delete(TaskController.delete);

module.exports = router;
