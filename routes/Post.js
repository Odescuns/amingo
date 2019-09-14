const express = require('express')
const Post = require('../models/Post')

const router = express.Router();

router.post('/', (req, res) => {
    console.log('req.body.email->', req.body.email);
    User
        .findOne({email: req.body.email})
        .then(user => {
            if (user) {
                console.log("user->", user);
                const newPost = new Post({
                    email: req.body.email,
                    message: req.body.message,
                    userId: user._id
                });
            
                newPost
                    .save()
                    .then(post => res.json(post))
                    .catch(err => res.json(err))
            } else {
                res.json({message: "User is not found"});
            }
        })
        .catch(err => res.json({message: err}))
});

router.get('/', (req, res)=>{
    Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.json(err));
});

module.exports = router;