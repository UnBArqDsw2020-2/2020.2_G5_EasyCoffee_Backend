const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { urlencoded } = require("body-parser");

const app = express();
let corsOptions = {
  origin : "http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser,urlencoded({extended:true}));
app.use(express.json());

require('./controllers/authControllers')(app)

app.get('/',(req,res)=>{
  res.send('we are on home')
})

app.listen(3000, () => console.log('Server running...'));