const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect(
    'mongodb://db:27017/backend',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  const port = 3000;

app.listen(port, () => console.log('Server running...'));