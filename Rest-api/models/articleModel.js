const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const articleSchema = new mongoose.Schema({
    articleName: {
        type: String,
        required: true
    },
    subscribers: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    posts: [{
        type: ObjectId,
        ref: "Post"
    }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Article', articleSchema);
