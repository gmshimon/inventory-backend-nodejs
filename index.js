const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')

const port = process.env.PORT||8080

//middleware
app.use(express.json())
app.use(cors());


//database connection
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database connected successfully");
})

app.listen(port,()=>{
    console.log('Server running at ',port);
})