const express =  require('express');

const connect = require("./configs/db")

const app = express();

app.use(express.json());

// const User = require('./models/user.model');
// const Post = require('./models/post.model');
// const Comment = require('./models/comment.model');
// const Tag = require('./models/tag.model');

const userController = require('./controllers/user.controller');
const postController = require('./controllers/post.controller');
const commentController = require('./controllers/comment.controller');
const tagController = require('./controllers/tag.controller');

app.use("/users", userController);
app.use("/posts", postController);
app.use("/comments", commentController);
app.use("/tags", tagController);

app.listen(2340,async ()=> {
    await connect();
    console.log("listening on port 2340");
})