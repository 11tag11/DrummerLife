const { articleModel } = require('../models');
const { newPost } = require('./postController')

function getArticles(req, res, next) {
    articleModel.find()
        .populate('userId')
        .then(articles => res.json(articles))
        .catch(next);
}

function getArticle(req, res, next) {
    const { articleId } = req.params;
    // hehhe

    articleModel.findById(articleId)
        .populate({
            path : 'posts',
            populate : {
              path : 'userId'
            }
          })
        .then(article => res.json(article))
        .catch(next);
}

function createArticle(req, res, next) {
    const { articleName, postText } = req.body;
    const { _id: userId } = req.user;

    articleModel.create({ articleName, userId, subscribers: [userId] })
        .then(article => {
            newPost(postText, userId, article._id)
                .then(([_, updatedArticle]) => res.status(200).json(updatedArticle))
        })
        .catch(next);
}

function subscribe(req, res, next) {
    const articleId = req.params.articleId;
    const { _id: userId } = req.user;
    articleModel.findByIdAndUpdate({ _id: articleId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedArticle => {
            res.status(200).json(updatedArticle)
        })
        .catch(next);
}

module.exports = {
    getArticles,
    createArticle,
    getArticle,
    subscribe,
}
