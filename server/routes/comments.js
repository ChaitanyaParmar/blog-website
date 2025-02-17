const express = require('express');
const { Comments } = require('../models');
const router = express.Router();

router.get("/:postID", async (req, res) => {
    const postID = req.params.postID;
    const comments = await Comments.findAll({where: { PostId : postID }});
    res.json(comments);
})

router.post("/", async (req, res) => {
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment); 
})

module.exports = router;