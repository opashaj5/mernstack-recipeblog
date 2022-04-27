const express = require('express');

require('dotenv').config();
require('./config/database');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});