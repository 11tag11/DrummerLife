const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { articleController, postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', articleController.getArticles);
router.post('/', auth(), articleController.createArticle);

router.get('/:articleId', articleController.getArticle);
router.post('/:articleId', auth(), postController.createPost);
router.put('/:articleId', auth(), articleController.subscribe);
router.put('/:articleId/posts/:postId', auth(), postController.editPost);
router.delete('/:articleId/posts/:postId', auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router