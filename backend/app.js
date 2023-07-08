const express = require('express')
const db=require('./config/dbConfig')
const app=express()
const path = require('path')
const userRouter=require('./routers/userRouter')
const adminRouter=require('./routers/adminRouter')
require('dotenv').config()

const port = process.env.port

const cors=require('cors')
app.use(cors());

app.use(express.json())
app.use(express.static(path.join(__dirname, ('./public'))))
app.use(express.urlencoded({ extended: false }))

app.use('/admin',adminRouter)
app.use('/',userRouter)


async function startApp() {
    try {
  
      db.connect()
      app.listen(port, () => {
        console.log(`Server is up and running at ${port}`);
      });
     
  
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1);
    }
  }
  
  startApp();