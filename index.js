const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')

const port = process.env.PORT||8080

//middleware
app.use(express.json())
app.use(cors());

//routes
const brandRouter = require('./routes/brand.route')
const storeRouter = require('./routes/store.route')
const productRouter = require('./routes/product.route')

//database connection
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database connected successfully");
})

app.get('/',async(req,res,next)=>{
    res.send("hello world")
})


app.use('/api/v1/brand',brandRouter)
app.use('/api/v1/store',storeRouter)
app.use('/api/v1/product',productRouter)

app.listen(port,()=>{
    console.log('Server running at ',port);
})