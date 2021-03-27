const express = require("express");

const app = express();

require('./controllers/authControllers')(app)

app.get('/',(req,res)=>{
  res.send('we are on home')
})

app.listen(3000, () => console.log('Server running...'));