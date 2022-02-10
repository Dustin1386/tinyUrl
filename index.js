const express = require('express');
const connectDB = require('./config/db')

const app = express();

connectDB();

app.use(express.json({extended:false}));

const PORT= 2000; 

app.listen(PORT, () => console.log('server is running'))