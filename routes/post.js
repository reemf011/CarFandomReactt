const {Router} = require('express');

const postController = require('../controllers/Post');

const postRouter = Router();


postRouter.get('/', postController.getPost);

module.exports = postRouter;