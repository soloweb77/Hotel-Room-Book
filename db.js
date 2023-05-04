require("dotenv").config()

const mongoose = require("mongoose")

var mongoURL=process.env.MONGODB

mongoose.connect(mongoURL , {useUnifiedTopology:true,useNewUrlparser:true})

var connection=mongoose.connection

connection.on('error',()=>{
    console.log('Mongodb connection failed')
})
connection.on('connected',()=>{
    console.log('mongodb connected successful')
})

module.exports=mongoose