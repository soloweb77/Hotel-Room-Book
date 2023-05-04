const express = require("express")
const app =express()
require("dotenv").config()

const dbconfig=require('./db')
const roomsRoute=require('./routes/roomsRoute')
const usersRoute = require("./routes/usersRoute")
const bookingsRoute=require('./routes/bookingsRoute')


app.use(express.json())
app.use('/api/rooms',roomsRoute)
app.use('/api/users',usersRoute)
app.use('/api/bookings',bookingsRoute)


const port=process.env.PORT

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
