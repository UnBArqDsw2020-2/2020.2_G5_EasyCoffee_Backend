const express = require("express");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

app.use(userRoutes);
app.use(authRoutes);

app.get('/', (req, res) => {
  res.send('we are on home');
});

app.listen(3333, () => console.log('Server running...'));