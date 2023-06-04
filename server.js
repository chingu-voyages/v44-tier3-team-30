const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectingDB = require("./config/connectingDB")

//env config
dotenv.config();

// router import
const userRoutes = require('./routes/userRoute')
const blogRoutes = require('./routes/blogRoute')

// mongoDB connection
connectingDB()


// rest object
const app = express()

// middlewares
app.use(express.json())

// routes
app.use("/api/ver1/user", userRoutes)
app.use("/api/ver1/blog", blogRoutes)

//listen
app.listen(8080, () => {
    console.log("Server Running Successfully")
})