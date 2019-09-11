const express = require('express')
const Post = require('../models/Post')

const router = express.Router();

router.post('/message', (req, res) => {
    const newPost = new Phost({
        message: req.body.message,
        email: req.body.email,
    })
    newPost
        .save()
        .then(post=> {
            res.json(post)
        })
        .catch(err=> {
            res.json(err)
        })
});

router.get('/', (req, res)=>{
    Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.json(err));
});

module.exports = router;