const express = require('express');

const router = express.Router();

const Tag = require('../models/tag.model');

router.post("/",async function (req, res) {

    try{
            const tag = await Tag.create(req.body);

             return res.status(201).send(tag);
    }
    catch(err){
        return res.status(400).send(err.message);

    }
    
})

router.get("/",async function (req, res) {

    try{
            const tags = await Tag.find().lean().exec();

             return res.status(200).send(tags);
    }
    catch(err){
        return res.status(400).send(err.message);

    }
    
})

router.get("/:id",async function (req, res) {

    try{
            const tag = await Tag.findById(req.params.id).lean().exec();

             return res.status(200).send(tag);
    }
    catch(err){
        return res.status(400).send(err.message);

    }
    
})

router.patch("/:id",async function (req, res) {

    try{
            const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();

             return res.status(205).send(tag);
    }
    catch(err){
        return res.status(400).send(err.message);

    }
    
})

router.delete("/:id",async function (req, res) {

    try{
            const tag = await Tag.findByIdAndDelete(req.params.id).lean().exec();

             return res.status(200).json({tag: tag});
    }
    catch(err){
        return res.status(400).send(err.message);

    }
    
})

module.exports = router;