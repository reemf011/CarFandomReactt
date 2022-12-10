const {Router} = require('express');

const feedbackController = require('../controllers/Feedback');

const feedbackRouter = Router();


feedbackRouter.get('/', feedbackController.getFeedback);

module.exports = feedbackRouter;

feedbackRouter.post('/', feedbackController.postFeedback);