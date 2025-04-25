const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agentController');

router.post('/', agentController.createAgent);
router.get('/', agentController.getAgents);
router.get('/:id', agentController.getAgent);
router.put('/:id', agentController.updateAgent);
router.delete('/:id', agentController.deleteAgent);
router.post('/test', agentController.testAgent);
router.post('/use', agentController.useAgent);

module.exports = router;
