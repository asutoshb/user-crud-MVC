const express = require('express');

const router = express.Router();

const Comment = require('../models/comment.model');

router.post("/",async function (req, res) {

    try{
            const comment = await Comment.create(req.body);

             return res.status(201).send(comment);
    }
    catch(err){
        return res.status(400).send(err.message);

    }
    
})

router.get("/",async function (req, res) {

    try{
            const comments = await Comment.find().populate("postId").lean().exec();

             return res.status(200).send(comments);
    }
    catch(err){
        return res.status(400).send(err.message);

    }
    
})

router.get("/:id",async function (req, res) {

    try{
            const comment = await Comment.findById(req.params.id).lean().exec();

             return res.status(200).send(comment);
    }
    catch(err){
        return res.status(400).send(err.message);

    }
    
})

router.patch("/:id",async function (req, res) {

    try{
            const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();

             return res.status(205).send(comment);
    }
    catch(err){
        return res.status(400).send(err.message);

    }
    
})

router.delete("/:id",async function (req, res) {

    try{
            const comment = await Comment.findByIdAndDelete(req.params.id).lean().exec();

             return res.status(200).json({comment: comment});
    }
    catch(err){
        return res.status(400).send(err.message);

    }
    
})

module.exports = router;