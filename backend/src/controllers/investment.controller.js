const Investment = require('../models/investment.model');
const Project = require('../models/project.model');
const User = require('../models/user.model');
const mongoose = require('mongoose');

const investmentController = {
  async createInvestment(req, res) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const { projectId, amount } = req.body;
      const userId = req.user.userId;

      const project = await Project.findById(projectId);
      if (!project) {
        throw new Error('Project not found');
      }

      if (project.status !== 'FUNDING') {
        throw new Error('Project is not accepting investments');
      }

      // Calculate expected carbon credits based on investment amount
      const expectedCarbonCredits = (amount / project.fundingGoal) * project.expectedCarbonCredits;

      const investment = new Investment({
        userId,
        projectId,
        amount,
        expectedCarbonCredits,
        status: 'PENDING'
      });

      await investment.save({ session });

      // Update project's current funding
      project.currentFunding += amount;
      if (project.currentFunding >= project.fundingGoal) {
        project.status = 'ACTIVE';
      }
      await project.save({ session });

      await session.commitTransaction();
      res.status(201).json(investment);
    } catch (error) {
      await session.abortTransaction();
      res.status(500).json({ error: error.message });
    } finally {
      session.endSession();
    }
  },

  async getUserInvestments(req, res) {
    try {
      const investments = await Investment.find({ userId: req.user.userId })
        .populate('projectId')
        .sort({ createdAt: -1 });
      res.json(investments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getProjectInvestments(req, res) {
    try {
      const { projectId } = req.params;
      const investments = await Investment.find({ projectId })
        .populate('userId', 'name email')
        .sort({ createdAt: -1 });
      res.json(investments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = investmentController;