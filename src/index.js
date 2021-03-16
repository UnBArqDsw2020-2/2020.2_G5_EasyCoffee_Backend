const express = require("express");

const app = express();

app.use(express.json());

require('./controllers/authControllers')(app)

app.get('/',(req,res)=>{
  res.send('we are on home')
})

app.listen(3000, () => console.log('Server running...'));