const express = require('express')
const router = express.Router();

const Post = require('../models/Post')


router.get('/',(req,res)=>{
  res.send('we are on posts')
});

router.post('/post',async(req,res)=>{
  try {
    const user = await Post.create(req.body);
    user.password=undefined;
    return res.send({user});
  } catch (err) {
    return res.status(400).send({err:'registration failed'})
  }
})

module.exports = app =>app.use('/auth',router);