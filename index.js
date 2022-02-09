const express = require('express');

const app = express();

app.use(express.json({extended:false}));

const PORT= 2000; 

app.listen(PORT, () => console.log('server is running'))