const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

const db = require("./src/models");
const Role = require('./src/models/Role');
const role = db.role;

const app = express();

let corsOptions = {
  origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


const initial = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && (count === 0)) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error ", err);
        }
        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error ", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

mongoose
  .connect(
    'mongodb://db:27017/backend',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('MongoDB Connected');
    initial();
  })
  .catch(err => console.log(err));

const port = 3000;

app.listen(port, () => console.log('Server running...'));