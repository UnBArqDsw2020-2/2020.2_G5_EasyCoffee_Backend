const mongoose = require('../database');
const bcrypt = require('bcrypt');

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true,
    lowercase:true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

PostSchema.pre('save',async function(next){
  const hash = await bcrypt.hash(this.password,10);
  this.password=hash;

  next();
});


module.exports = mongoose.model('Post',PostSchema);