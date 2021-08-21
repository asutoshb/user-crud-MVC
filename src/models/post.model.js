const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    tagIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tags",
            required: true,
        }
    ]
},
{
    versionKey: false, 
    timestamps : true
});

const Post = mongoose.model("posts", postSchema);//users collection in mongodb

module.exports = Post;
