const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const investmentController = require('../controllers/investment.controller');
const auth = require('../middleware/auth');

// Project routes
router.post('/', auth, projectController.createProject);
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProjectById);
router.put('/:id', auth, projectController.updateProject);

// Investment routes
router.post('/:id/invest', auth, investmentController.createInvestment);
router.get('/:id/investments', auth, investmentController.getProjectInvestments);
router.get('/user/investments', auth, investmentController.getUserInvestments);

module.exports = router;