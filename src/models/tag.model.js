const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    tagName: {type: String, required: true}
},
{
    versionKey: false, 
    timestamps : true
});

const Tag = mongoose.model("tags", tagSchema);

module.exports = Tag;