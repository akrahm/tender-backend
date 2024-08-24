const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const proposalRoutes = require('./routes/proposalRoutes');
require('dotenv').config();
require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/proposals', proposalRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to our tender project!!!")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
