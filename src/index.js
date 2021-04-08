const express = require("express");
const cors = require('cors');
var http = require('http');
const app = express();

app.use(express.json());
app.use(cors())

require('./controllers/authControllers')(app)
require('./routes/product.routes')(app)



app.listen(3000, () => console.log('Server running...'));