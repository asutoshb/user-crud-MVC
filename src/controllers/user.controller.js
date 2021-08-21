const express = require('express');

const router = express.Router();

const User = require('../models/user.model');
const Post = require('../models/post.model');
const Comment = require('../models/comment.model');

router.post("/",async function (req, res) {

    const user = await User.create(req.body);

    return res.send(user);
})



router.get("/",async function (req, res) {
    const users = await User.find().lean().exec();      
    return res.send(users);
})

router.get("/:id", async function (req, res) {
    const user = await User.findById(req.params.id).lean().exec();
    return res.send(user);
})

router.patch("/:id", async function (req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
    return res.send(user);
})

router.delete("/:id", async function (req, res) {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.send(user);
})


// router.get('/users/:id/posts', async function (req, res) {
//     const userPosts = await Post.find({userId: req.params.id}).lean().exec();
//     const user = await User.findById(req.params.id);

//     res.status(200).send({posts:userPosts, user: user});

//    // res.status(200).send(userPosts);
// })

router.get("/:id/posts", async function (req, res) {
    const userPosts = await Post.find({ userId: req.params.id }).lean().exec()
    let userPostsWithComments = {};
    userPosts.forEach(async post => {
        const postId = post._id;
        const comment = await getUserPostsWithComments(post);
        userPostsWithComments[postId] = {};
        userPostsWithComments[postId]["post"] = post;
        userPostsWithComments[postId]["comments"] = comment;
    })
    const user = await User.findById(req.params.id)
    return res.status(200).json({ postsWithComments: userPostsWithComments, user: user })
})

async function getUserPostsWithComments(post) {
    const comment = await Comment.find({ postId: post._id }).lean().exec()
    return comment
}

module.exports = router;