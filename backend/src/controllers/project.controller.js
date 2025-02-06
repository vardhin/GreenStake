const Project = require('../models/project.model');

const projectController = {
  async createProject(req, res) {
    try {
      const project = new Project({
        ...req.body,
        creatorId: req.user.userId,
        status: 'FUNDING'
      });
      await project.save();
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getProjects(req, res) {
    try {
      const { category, status, page = 1, limit = 10 } = req.query;
      const query = {};
      
      if (category) query.category = category;
      if (status) query.status = status;

      const projects = await Project.find(query)
        .populate('creatorId', 'name email')
        .skip((page - 1) * limit)
        .limit(parseInt(limit))
        .sort({ createdAt: -1 });

      const total = await Project.countDocuments(query);

      res.json({
        projects,
        totalPages: Math.ceil(total / limit),
        currentPage: page
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getProjectById(req, res) {
    try {
      const project = await Project.findById(req.params.id)
        .populate('creatorId', 'name email');
      
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateProject(req, res) {
    try {
      const project = await Project.findOne({
        _id: req.params.id,
        creatorId: req.user.userId
      });

      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }

      Object.assign(project, req.body);
      await project.save();
      
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = projectController;
