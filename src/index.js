const express = require("express");
const cors = require('cors');
var http = require('http');
const app = express();

app.use(express.json());
app.use(cors())

require('./controllers/authControllers')(app)
require('./routes/product.routes')(app)


const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(userRoutes);
app.use(authRoutes);

app.get('/', (req, res) => {
  res.send('we are on home');
});

app.listen(3000, () => console.log('Server running...'));